import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.scss'],
})
export class AddBlogPostComponent {
  blogPostModel: AddBlogPost;

  constructor(
    private blogPostService: BlogPostService,
    private router: Router
  ) {
    this.blogPostModel = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featuredImageUrl: '',
      author: '',
      isVisible: true,
      publishedDate: new Date(),
    };
  }

  onFormSubmit(): void {
    this.blogPostService.createBlogPost(this.blogPostModel).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/blogpost-list');
      },

      error: (e) => {
        console.error('Something went wrong')
      },
    });
  }
}
