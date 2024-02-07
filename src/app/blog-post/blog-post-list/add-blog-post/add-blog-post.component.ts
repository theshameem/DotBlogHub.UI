import { Component } from '@angular/core';
import { AddBlogPost } from '../../../../models/add-blog-post.model';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.scss'],
})
export class AddBlogPostComponent {
  blogPostModel: AddBlogPost;

  constructor() {
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
    console.log(this.blogPostModel);
  }
}
