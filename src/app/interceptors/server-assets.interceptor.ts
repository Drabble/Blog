import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject, InjectionToken } from '@angular/core';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defer } from 'rxjs';

// This module is imported only by the server entry points, never by the browser.
export const BLOG_ASSET_ROOT = new InjectionToken<string>('BLOG_ASSET_ROOT');

export const serverAssetsInterceptor: HttpInterceptorFn = (request, next) => {
  if (!request.url.startsWith('assets/')) return next(request);
  const root = inject(BLOG_ASSET_ROOT, {optional: true}) ?? resolve(process.cwd(), 'src');
  // Only public post text and metadata may be read. No arbitrary filesystem paths.
  if (!/^assets\/(?:posts\.json|posts\/[a-zA-Z0-9_-]+\/(?:index\.json|post\.md))$/.test(request.url)) {
    return defer(() => { throw new HttpErrorResponse({status: 404, url: request.url}); });
  }
  return defer(async () => {
    try {
      const text = await readFile(resolve(root, request.url), 'utf8');
      return new HttpResponse({
        body: request.responseType === 'text' ? text : JSON.parse(text),
        status: 200,
        url: request.url,
      });
    } catch {
      throw new HttpErrorResponse({status: 404, url: request.url, statusText: 'Post asset unavailable'});
    }
  });
};
