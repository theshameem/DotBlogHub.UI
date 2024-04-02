import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.scss'],
})
export class AddBlogPostComponent implements OnInit {
  blogPostModel: AddBlogPost;
  categories$!: Observable<Category[]>;

  constructor(
    private router: Router,
    private blogPostService: BlogPostService,
    private categoryService: CategoryService
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
      categories: []
    };
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategoryList();
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
