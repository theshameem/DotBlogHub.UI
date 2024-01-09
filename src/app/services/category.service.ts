import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  addCategory(model: any): Observable<void> {
    const payload = {
      name: model.categoryName,
      urlHandle: model.urlHandler,
    };
    const url = `https://localhost:7045/api/categories`;

    return this.http.post<void>(url, payload);
  }

  getCategoryList(): Observable<void> {
    const url = `https://localhost:7045/api/Categories`;

    return this.http.get<void>(url);
  }
}
