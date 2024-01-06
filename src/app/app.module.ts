import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'category-list', component: CategoryListComponent },
];
@NgModule({
  declarations: [AppComponent, NavbarComponent, CategoryListComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
