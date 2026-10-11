import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HomeComponent], providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
  }));
  afterEach(() => TestBed.inject(HttpTestingController).verify());
  it('loads cards in the index order', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const http = TestBed.inject(HttpTestingController);
    http.expectOne('assets/posts.json').flush(['new', 'old']);
    http.expectOne('assets/posts/old/index.json').flush({ title: 'Old', thumbnail: 'old.png' });
    http.expectOne('assets/posts/new/index.json').flush({ title: 'New', thumbnail: 'new.png' });
    fixture.detectChanges();
    expect(fixture.componentInstance.state().posts.map(post => post.path)).toEqual(['new', 'old']);
    expect(fixture.nativeElement.querySelectorAll('app-card').length).toBe(2);
  });
  it('shows a useful error when the index cannot load', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    TestBed.inject(HttpTestingController).expectOne('assets/posts.json').flush('error', { status: 503, statusText: 'Unavailable' });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[role=alert]').textContent).toContain('could not be loaded');
  });
});
