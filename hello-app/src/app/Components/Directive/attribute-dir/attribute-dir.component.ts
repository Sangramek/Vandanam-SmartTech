import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {

  div1BgColor: string = 'bg-primary';
  isDiv2Active: boolean =false;

  num1: string = '';
  num2: string = '';

  addRedClass(){
    this.div1BgColor = "bg-danger"
  }

  addBlueClass(){
    this.div1BgColor= "bg-primary"
  }

  toggleDiv2Class(){
    this.isDiv2Active = !this.isDiv2Active;
  }

  studentList: any[] =[
    {Id:1,totalMarks:75,gender:'male',name:'Sangram',city:'Kolhapur',isActive:true },
    {Id:2,totalMarks:65,gender:'male',name:'Varad',city:'Pune',isActive:false },
    {Id:3,totalMarks:55,gender:'male',name:'Vaibhav',city:'Hadapsar',isActive:false },
    {Id:4,totalMarks:45,gender:'female',name:'Sasha',city:'Bihar',isActive:false },
    {Id:5,totalMarks:25,gender:'male',name:'Sumit',city:'Panhala',isActive:false },
    {Id:6,totalMarks:85,gender:'female',name:'Ana',city:'Nagar',isActive:false }
    ]

    costumerStyle: any = {
      'color':'white',
      'background-color':'red',
      'width':'200px',
      'height':'200px',
      'border-radius':'50%'
    };
}
