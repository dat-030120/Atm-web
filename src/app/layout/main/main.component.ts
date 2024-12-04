import { ApiService } from './../../../core/api/api.service';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,RouterModule,MatButtonModule,MatSelectModule,MatInputModule,MatFormFieldModule, ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  type:number=0
  input:string|null=null

  constructor(private router :Router,private  apiService:ApiService){
    this.apiService.observable.next({type:this.type,input:this.input})
  }
  search(){
    this.apiService.observable.next({type:this.type,input:this.input})
  }
}
