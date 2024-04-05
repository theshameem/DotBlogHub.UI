import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBlogPostComponent } from './blog-post/add-blog-post/add-blog-post.component';
import { BlogPostListComponent } from './blog-post/blog-post-list/blog-post-list.component';
import { EditBlogpostComponent } from './blog-post/edit-blogpost/edit-blogpost.component';
import { BlogPostService } from './blog-post/services/blog-post.service';
import { CategoryListComponent } from './category-list/category-list.component';
import { CreateCategoryModalComponent } from './create-category-modal/create-category-modal.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryService } from './services/category.service';

const routes: Routes = [
  { path: 'admin/category-list', component: CategoryListComponent },
  { path: 'admin/blogpost-list', component: BlogPostListComponent },
  { path: 'admin/add-blog-post', component: AddBlogPostComponent },
  { path: 'admin/blogposts/:id', component: EditBlogpostComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    CreateCategoryModalComponent,
    ClickOutsideDirective,
    CategoryListComponent,
    BlogPostListComponent,
    AddBlogPostComponent,
    EditBlogpostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    CategoryService,
    BlogPostService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
