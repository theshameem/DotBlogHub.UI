import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddCategoryRequest } from '../../models/add-category-request.model';
import { Category } from '../../models/category.model';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  addCategory(payload: AddCategoryRequest): Observable<void> {
    const url = `${environment.apiBaseUrl}/api/categories`;

    return this.http.post<void>(url, payload);
  }

  getCategoryList(): Observable<Category[]> {
    const url = `${environment.apiBaseUrl}/api/categories`;

    return this.http.get<Category[]>(url);
  }
}
