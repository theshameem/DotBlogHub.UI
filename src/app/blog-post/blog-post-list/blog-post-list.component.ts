import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss'],
})
export class BlogPostListComponent implements OnInit, OnDestroy {
  blogPosts$?: Observable<BlogPost[]>;
  private _unsubsribeAll: Subject<void> = new Subject<any>();

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    this.blogPosts$ = this.blogPostService.getBlogList();
  }

  ngOnDestroy(): void {
    this._unsubsribeAll.complete();
    this._unsubsribeAll.next();
  }
}
