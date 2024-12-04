import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';

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
    MatDialogModule,
    MatPaginatorModule
  ],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css',
})
export class ComponentComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private apiService: ApiService,private dialog: MatDialog, private crd :ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    this.apiService.observable.subscribe((value: any) => {
      this.getAllData(value)
    
    });  }
  ngOnInit(): void {

    this.checkForLoop()

  }
  getAllData(data:any){
    this.apiService.getListAtm(data).subscribe({ next:(value) =>{
          this.apiData = value
          console.log(this.listData)
          this.crd.detectChanges()
          this.checkForLoop()
          if(this.paginator){
            this.paginator.firstPage()
          }
    },error(err) {
        alert('Lỗi không lấy được dữ liệu')
    },})
  }
  listData: Product[] = []
  apiData:Product[] = [
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
  pageSize = 10;
  currentPage = 1; 

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex+1;
    this.checkForLoop()
  }
    // Hàm tạo lại mảng
  checkForLoop() {
    this.listData =this.apiData.slice((this.currentPage-1)*this.pageSize,(this.currentPage)*this.pageSize)
  }
}
