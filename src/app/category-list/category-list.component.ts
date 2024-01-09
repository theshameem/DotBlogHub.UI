import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { CreateCategoryModalComponent } from '../create-category-modal/create-category-modal.component';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit, OnDestroy {
  isModalOpen: boolean = false;
  categoryList: any = [];
  private _unsubscribeAll: Subject<void> = new Subject<any>();

  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  openCreateCategoryModal(): void {
    this.isModalOpen = true;
    const dialogRef = this.dialog.open(CreateCategoryModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.isModalOpen = false;
    });
  }

  getCategories(): void {
    this.categoryService
      .getCategoryList()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res) => {
        this.categoryList = res;
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.complete();
    this._unsubscribeAll.next();
  }
}
