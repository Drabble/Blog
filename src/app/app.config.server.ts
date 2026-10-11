import { mergeApplicationConfig, ApplicationConfig, inject, REQUEST_CONTEXT } from '@angular/core';
import { provideServerRendering, withRoutes, RenderMode } from '@angular/ssr';
import { appConfig } from './app.config';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BLOG_ASSET_ROOT, serverAssetsInterceptor } from './interceptors/server-assets.interceptor';
import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes([
      { path: '', renderMode: RenderMode.Prerender },
      {
        path: 'post/:slug',
        renderMode: RenderMode.Prerender,
        async getPrerenderParams() {
          const paths: string[] = JSON.parse(await readFile(resolve(process.cwd(), 'src/assets/posts.json'), 'utf8'));
          return paths.map(slug => ({ slug }));
        },
      },
      { path: '**', renderMode: RenderMode.Server },
    ])),
    {
      provide: BLOG_ASSET_ROOT,
      useFactory: () => (inject(REQUEST_CONTEXT) as { assetRoot?: string } | null)?.assetRoot ?? resolve(process.cwd(), 'src'),
    },
    provideHttpClient(withFetch(), withInterceptors([serverAssetsInterceptor]))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
