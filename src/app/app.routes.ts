import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(module => module.HomeComponent) },
    { path: 'post/:slug', loadComponent: () => import('./pages/post/post.component').then(module => module.PostComponent) },
];
