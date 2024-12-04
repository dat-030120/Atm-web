import { CommonModule } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ApiService } from '../../../../core/api/api.service';

@Component({
  selector: 'app-component-create',
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './component-create.component.html',
  styleUrl: './component-create.component.css',
})
export class ComponentCreateComponent implements OnInit {
  productForm: FormGroup;
  product: any = {};
  readonly data = inject(MAT_DIALOG_DATA);

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ComponentCreateComponent>,
    private apiService: ApiService
  ) {
    console.log(this.data);
    this.product = this.data ? this.data : {};
    this.productForm = this.fb.group({
      id: [  this.product?.id ],
      name: [
        this.product?.name,
        [Validators.required, Validators.minLength(3)],
      ],
      manufacturer: [this.product?.manufacturer, Validators.required],
      type: [this.product?.type, Validators.required],
      seri: [
        this.product?.seri,
        [Validators.required, Validators.pattern('^[0-9]+$')],
      ],
      img: [this.product?.img],
    });
  }

  ngOnInit(): void {}
  cansel() {
    this.dialogRef.close();
  }
  submit(): void {
    if (this.productForm.valid) {
      if (!this.data.id) {
        this.apiService.getAdd(this.productForm.value).subscribe({
          next: (value) => {
            this.dialogRef.close(true);
            alert(' saved successfully!');
          },
          error: (err) => {
            alert('error');
          },
        });
      }else{
        this.apiService.getEdit(this.productForm.value).subscribe({
          next: (value) => {
            this.dialogRef.close(true);
            alert(' saved successfully!');
          },
          error: (err) => {
            alert('error');
          },
        });
      }
    }
  }
}
