import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let params: BehaviorSubject<ReturnType<typeof convertToParamMap>>;
  beforeEach(() => {
    params = new BehaviorSubject(convertToParamMap({ slug: 'first' }));
    TestBed.configureTestingModule({ imports: [PostComponent], providers: [
      provideHttpClient(), provideHttpClientTesting(), provideRouter([]),
      { provide: ActivatedRoute, useValue: { paramMap: params.asObservable() } },
    ] });
  });
  afterEach(() => TestBed.inject(HttpTestingController).verify({ ignoreCancelled: true }));
  it('cancels old requests when the route changes', () => {
    const fixture = TestBed.createComponent(PostComponent);
    const http = TestBed.inject(HttpTestingController);
    const old = http.expectOne('assets/posts/first/index.json');
    http.expectOne('assets/posts.json');
    params.next(convertToParamMap({ slug: 'second' }));
    expect(old.cancelled).toBe(true);
    http.expectOne('assets/posts/second/index.json').flush({ title: 'Second' });
    http.expectOne('assets/posts.json').flush(['first', 'second', 'third']);
    expect(fixture.componentInstance.state().previous).toBe('third');
    expect(fixture.componentInstance.state().next).toBe('first');
    expect(TestBed.inject(Title).getTitle()).toBe('Second');
  });
  it('rejects invalid slugs without requesting arbitrary assets', () => {
    params.next(convertToParamMap({ slug: '../private' }));
    const fixture = TestBed.createComponent(PostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[role=alert]').textContent).toContain('could not be loaded');
    TestBed.inject(HttpTestingController).expectNone(() => true);
  });
});
