import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-category-modal',
  templateUrl: './create-category-modal.component.html',
  styleUrls: ['./create-category-modal.component.scss'],
})
export class CreateCategoryModalComponent implements OnInit {
  categoryForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateCategoryModalComponent>,
    private formBuilder: FormBuilder
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
      this.dialogRef.close();
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
}
