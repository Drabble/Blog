import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';
import { Post } from '../../post';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CardComponent],
})
export class HomeComponent {
  private readonly http = inject(HttpClient);
  readonly state = toSignal(this.http.get<string[]>('assets/posts.json').pipe(
    switchMap(paths => paths.length ? forkJoin(paths.map(path =>
      this.http.get<Post>('assets/posts/' + path + '/index.json').pipe(map(post => ({ ...post, path })))
    )) : of([])),
    map(posts => ({ posts, failed: false })),
    catchError(() => of({ posts: [] as Post[], failed: true })),
  ), { initialValue: { posts: [] as Post[], failed: false } });
}
