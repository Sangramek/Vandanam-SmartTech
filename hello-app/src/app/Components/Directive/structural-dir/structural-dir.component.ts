import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  isDiv1Visiable: boolean = true;  
  isDiv2Visiable: boolean = false;

  num1: string ='';
  num2: string ='';

  isActive: boolean =false;
  selectedState: string='';

  cityArray: string[]= ['Pune','Kolhapur','Mumbai','Thane','Sangli']

  studentList: any[] =[
    {Id:1, name:'Sangram',city:'Kolhapur',isActive:true },
    {Id:2, name:'Varad',city:'Pune',isActive:false },
    {Id:3, name:'Vaibhav',city:'Hadapsar',isActive:false },
    {Id:4, name:'Sushant',city:'Bihar',isActive:false },
    {Id:5, name:'Sumit',city:'Panhala',isActive:false },
    {Id:6, name:'Karan',city:'Nagar',isActive:false }
    ]


  showDiv1() {
    this.isDiv1Visiable = true;
  }

  hideDiv1() {
    this.isDiv1Visiable = false;
  }

  toggleDiv2() {
    this.isDiv2Visiable = !this.isDiv2Visiable

    // if(this.isDiv2Visiable == true)
    // {
    //   this.isDiv2Visiable = false;
    // }
    // else{
    //   this.isDiv2Visiable = true;
    // }
  }

  constructor(private router: Router){

  }

  navigateToAttribute(){
    this.router.navigateByUrl("attribute-dir")
  }
}
