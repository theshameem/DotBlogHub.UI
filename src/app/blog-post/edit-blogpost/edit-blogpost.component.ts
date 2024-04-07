import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CategoryService } from '../../../app/services/category.service';
import { Category } from '../../../models/category.model';
import { BlogPost } from '../models/blog-post.model';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-edit-blogpost',
  templateUrl: './edit-blogpost.component.html',
  styleUrls: ['./edit-blogpost.component.scss'],
})
export class EditBlogpostComponent implements OnInit, OnDestroy {
  id: string | null = null;
  routeSubscription?: Subscription;
  blogPostModel?: BlogPost;
  categories$?: Observable<Category[]>;
  selectedCategories?: Array<string>;

  constructor(
    private route: ActivatedRoute,
    private blogPostService: BlogPostService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategoryList();

    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        // Get BlogPost from API
        if (this.id) {
          this.blogPostService.getBlogPostId(this.id).subscribe({
            next: (response) => {
              this.blogPostModel = response;
              this.selectedCategories = response.categories.map((x) => x.id);
            },
          });
        }
      },
    });
  }

  onFormSubmit(): void {
    // if(this.blogPostModel) {
    //   this.blogPostService.createBlogPost(this.blogPostModel).subscribe({
    //     next: (response) => {
    //       this.router.navigateByUrl('/admin/blogpost-list');
    //     },
    //     error: (e) => {
    //       console.error('Something went wrong')
    //     },
    //   });
    // }
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }
}
