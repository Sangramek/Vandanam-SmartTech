import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../../reusableComponents/alert/alert.component';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any[] = [];
  customer: any[] = [];
 
  constructor(private http: HttpClient){

  }

  getAllUser(){
    
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      
      this.userList = result;
    })
  }

  getAllCustomer(){
    debugger
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((result:any)=>{
      debugger
      this.customer = result.data;
    })
  }
}
