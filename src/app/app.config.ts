import { ApplicationConfig } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { urlInterceptor } from './interceptors/url.interceptor';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};
const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, inMemoryScrollingFeature), provideClientHydration(), provideAnimations(), provideHttpClient(withFetch(), withInterceptors([urlInterceptor])), provideMarkdown({ loader: HttpClient }), SsrCookieService]
};
