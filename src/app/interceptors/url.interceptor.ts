import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

export const urlInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const platformId = inject(PLATFORM_ID);

    if (isPlatformServer(platformId) && req.url.startsWith('assets/')) {
        // For prerendering/SSR, we need absolute URLs.
        // Defaulting to localhost:4000 as used by Angular's default server.
        const baseUrl = 'http://localhost:4000';
        const absoluteReq = req.clone({
            url: `${baseUrl}/${req.url}`
        });
        return next(absoluteReq);
    }

    return next(req);
};
