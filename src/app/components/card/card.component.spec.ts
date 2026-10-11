import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  it('links the card to its article with a real thumbnail', () => {
    TestBed.configureTestingModule({ imports: [CardComponent], providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(CardComponent);
    fixture.componentRef.setInput('post', { path: 'sample', title: 'Sample', thumbnail: 'image.png', description: 'A project', date: '2026-10-10', tag: 'software' });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('a').getAttribute('href')).toBe('/post/sample');
    expect(fixture.nativeElement.querySelector('img').getAttribute('src')).toBe('assets/posts/sample/image.png');
    expect(fixture.nativeElement.textContent).toContain('Sample');
  });
});
