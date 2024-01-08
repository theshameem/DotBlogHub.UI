import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryModalComponent } from '../create-category-modal/create-category-modal.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  isModalOpen: boolean = false;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openCreateCategoryModal(): void {
    this.isModalOpen = true;
    console.log('openCreateCategoryModal()');
    const dialogRef = this.dialog.open(CreateCategoryModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.isModalOpen = false;
    });
  }
}
