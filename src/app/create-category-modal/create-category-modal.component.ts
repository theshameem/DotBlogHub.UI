import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { AddCategoryRequest } from '../../models/add-category-request.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-create-category-modal',
  templateUrl: './create-category-modal.component.html',
  styleUrls: ['./create-category-modal.component.scss'],
})
export class CreateCategoryModalComponent implements OnInit, OnDestroy {
  categoryForm!: FormGroup;
  private _unsubscribeAll: Subject<void> = new Subject<any>();

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    public dialogRef: MatDialogRef<CreateCategoryModalComponent>
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.categoryForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      urlHandler: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.categoryForm.valid) {
      const payload: AddCategoryRequest = {
        name: this.categoryForm.value.categoryName,
        urlHandle: this.categoryForm.value.urlHandler,
      };

      this.categoryService
        .addCategory(payload)
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe((res: any) => {
          this.dialogRef.close(true);
        });
    }
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

  onClickedOutside($event: any) {
    const classes = [
      'create-modal',
      'header',
      'form-input',
      'footer',
      'btn-secondary',
      'btn-primary',
      'btn',
      'float-end',
      'mb-4',
    ];
    let open = false;
    for (const c of $event.target.classList) {
      if (classes.indexOf(c) > -1) {
        open = true;
      }
    }

    if (!open) {
      this.dialogRef.close();
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
