import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatestAll, map, mergeAll, mergeMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Post } from '../../post';
import { MatSelectModule } from '@angular/material/select';


const posts = [
  "2024-01-01-monotonum"
]

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, CardComponent, MatButtonModule, MatSelectModule]
})
export class HomeComponent implements OnInit {

  selectedTag?: string = undefined
  tags = [
    { "id": "game", name: "Game" },
    { "id": "software", name: "Software" },
    { "id": "website", name: "Website" },
    { "id": "machine learning", name: "Machine learning" },
    { "id": "blockchain", name: "Blockchain" },
    { "id": "diy", name: "Diy" },
    { "id": "music", name: "Music" }
  ]
  posts: Post[] = []

  constructor(private http: HttpClient) { }

  getPaths(): Observable<string[]> {
    return this.http.get<string[]>(`assets/posts.json`);
  }

  getPost(post: string): Observable<Post> {
    return this.http.get<Post>(`assets/posts/${post}/index.json`);
  }

  ngOnInit(): void {
    this.getPaths()
      .pipe(
        mergeMap((paths: string[]) => {
          return paths.map(path => this.getPost(path).pipe(map(post => ({ ...post, path }))));
        }),
        combineLatestAll(),
        tap((posts: Post[]) => {
          this.posts = posts;
        })
      )
      .subscribe();
  }
}
