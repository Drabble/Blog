import { afterRenderEffect, Component, computed, ElementRef, inject, input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of, switchMap } from 'rxjs';
import { renderMarkdown } from './render-markdown';

@Component({
  selector: 'markdown',
  standalone: true,
  host: { ngSkipHydration: 'true' },
  template: '<div [innerHTML]="html()"></div>',
})
export class MarkdownComponent {
  readonly src = input.required<string>();
  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly content = toSignal(toObservable(this.src).pipe(
    switchMap(path => /^assets\/posts\/[a-zA-Z0-9_-]+\/post\.md$/.test(path)
      ? this.http.get(path, { responseType: 'text' }).pipe(
        map(text => ({ text, failed: false })),
        catchError(() => of({ text: '', failed: true })),
      )
      : of({ text: '', failed: true })),
  ), { initialValue: { text: '', failed: false } });
  readonly html = computed(() => {
    const content = this.content();
    const html = content.failed ? '<p role="alert">The article could not be loaded.</p>' : renderMarkdown(content.text);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  });
  constructor() {
    afterRenderEffect(() => {
      this.html();
      const prism = (window as unknown as { Prism?: { highlightAllUnder(element: HTMLElement): void } }).Prism;
      prism?.highlightAllUnder(this.element.nativeElement);
    });
  }
}
