import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, combineLatest, mergeMap, of, switchMap, tap } from 'rxjs';
import { Post } from '../../post';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterLink, MarkdownComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  post?: Post
  previous?: string
  next?: string

  constructor(private http: HttpClient, private route: ActivatedRoute, private titleService: Title,) { }

  getPost(slug: string): Observable<any> {
    return this.http.get(`assets/posts/${slug}/index.json`);
  }

  getPaths(): Observable<string[]> {
    return this.http.get<string[]>(`assets/posts.json`);
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        mergeMap(params => combineLatest(
          [of(params['slug']),
          this.getPost(params['slug'])]
        )),
        tap(([slug, post]) => {
          this.titleService.setTitle(post.title)
          this.post = {
            ...post,
            path: slug
          }
        })
      )
      .subscribe();

    this.route.params
      .pipe(
        mergeMap(params => combineLatest(
          [of(params["slug"]),
          this.getPaths()]
        )),
        tap(([slug, paths]) => {
          const index = paths.indexOf(slug);
          this.next = index > 0 ? paths[index - 1] : undefined;
          this.previous = index < paths.length - 1 ? paths[index + 1] : undefined;
        })
      )
      .subscribe();
  }
}
