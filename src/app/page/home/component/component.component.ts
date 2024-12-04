import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/userModels';
import { ApiService } from '../../../../core/api/api.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ComponentCreateComponent } from '../component-create/component-create.component';

@Component({
  selector: 'app-component',
  imports: [
    RouterOutlet,
    RouterModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css',
})
export class ComponentComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService,private dialog: MatDialog) {}
  ngOnInit(): void {
    this.apiService.observable.subscribe((value: any) => {
      console.log(value);
    });
  }
  listData: Product[] = [
    {
      id: '1',
      name: 'Product1',
      manufacturer: 'Manufacturer B',
      type: 'Type3',
      seri: 12345,
      img: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Product7',
      manufacturer: 'Manufacturer C',
      type: 'Type1',
      seri: 13456,
      img: null,
    },
    {
      id: '3',
      name: 'Product4',
      manufacturer: 'Manufacturer A',
      type: 'Type4',
      seri: 14567,
      img: 'https://via.placeholder.com/150?text=Product+2',
    },
    {
      id: '4',
      name: 'Product10',
      manufacturer: 'Manufacturer D',
      type: 'Type2',
      seri: 15678,
      img: 'https://via.placeholder.com/150?text=Product+1',
    },
    {
      id: '5',
      name: 'Product9',
      manufacturer: 'Manufacturer E',
      type: 'Type5',
      seri: 16789,
      img: null,
    },
    {
      id: '6',
      name: 'Product6',
      manufacturer: 'Manufacturer A',
      type: 'Type3',
      seri: 17890,
      img: 'https://via.placeholder.com/150',
    },
    {
      id: '7',
      name: 'Product8',
      manufacturer: 'Manufacturer B',
      type: 'Type2',
      seri: 18901,
      img: null,
    },
    {
      id: '8',
      name: 'Product5',
      manufacturer: 'Manufacturer D',
      type: 'Type1',
      seri: 19012,
      img: 'https://via.placeholder.com/150?text=Product+3',
    },
    {
      id: '9',
      name: 'Product2',
      manufacturer: 'Manufacturer C',
      type: 'Type4',
      seri: 20123,
      img: 'https://via.placeholder.com/150?text=Product+1',
    },
    {
      id: '10',
      name: 'Product3',
      manufacturer: 'Manufacturer E',
      type: 'Type5',
      seri: 21234,
      img: 'https://via.placeholder.com/150?text=Product+2',
    },
  ];

  openModal(data:any = undefined): void {
    const dialogRef = this.dialog.open(ComponentCreateComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal closed', result);
    });
  }
}
