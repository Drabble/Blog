import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, forkJoin, map, of, startWith, switchMap, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { Post } from '../../post';
import { MarkdownComponent } from '../../components/markdown/markdown.component';

interface PostState { post?: Post; previous?: string; next?: string; failed: boolean; }

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink, MarkdownComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  readonly state = toSignal(this.route.paramMap.pipe(
    switchMap(params => {
      const slug = params.get('slug') ?? '';
      if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return of<PostState>({ failed: true });
      return forkJoin({
        post: this.http.get<Post>('assets/posts/' + slug + '/index.json'),
        paths: this.http.get<string[]>('assets/posts.json'),
      }).pipe(
        map(({ post, paths }): PostState => {
          const index = paths.indexOf(slug);
          if (index < 0) return { failed: true };
          return { post: { ...post, path: slug }, previous: paths[index + 1], next: index > 0 ? paths[index - 1] : undefined, failed: false };
        }),
        catchError(() => of<PostState>({ failed: true })),
        startWith<PostState>({ failed: false }),
      );
    }),
    tap(state => this.title.setTitle(state.post?.title ?? (state.failed ? 'Article unavailable' : 'Antoine Drabble'))),
  ), { initialValue: { failed: false } as PostState });
}
