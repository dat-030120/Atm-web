import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
    MatDialogModule],
  templateUrl: './component-create.component.html',
  styleUrl: './component-create.component.css'
})
export class ComponentCreateComponent implements OnInit {
  productForm: FormGroup;
  @Inject(MAT_DIALOG_DATA) public data: any
  product:any={}
  constructor(private fb: FormBuilder  , private dialogRef: MatDialogRef<ComponentCreateComponent>,
   ) {
    console.log(this.data)
     this.product = this.data?.data? this.data.data :{}
    this.productForm = this.fb.group({
      id: [{ value: this.product?.id, disabled: true }],
      name: [this.product?.name, [Validators.required, Validators.minLength(3)]],
      manufacturer: [this.product?.manufacturer, Validators.required],
      type: [this.product?.type, Validators.required],
      seri: [this.product?.seri, [Validators.required, Validators.pattern('^[0-9]+$')]],
      img: [this.product?.img]
    });
  }

  ngOnInit(): void {
   
  }
  
  submit(): void {
    if (this.productForm.valid) {
      const updatedProduct = this.productForm.getRawValue();
      console.log('Updated Product:', updatedProduct);
      alert('Product saved successfully!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }

}
