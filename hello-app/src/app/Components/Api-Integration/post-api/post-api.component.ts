import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from '../../../reusableComponents/alert/alert.component';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule,JsonPipe,AlertComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit{

  //this should be come from api side only
  deptObj: any = {
    "departmentId":0,
    "departmentName":"",
    "departmentLogo":""
  }

  deptList: any[] = [];

  http = inject(HttpClient);

  constructor(private deptSrv: DepartmentService){}

  ngOnInit(): void {
    this.getDepartment();
  }

  // onSave(){
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any)=>{
  //     debugger
  //     if(res.result) {
  //       debugger
  //       alert("Department Created Successfully!!");
  //       this.getDepartment();
  //         } else {
  //         alert(res.message)
  //       }
  //   })
  // }

  onSave(){
    this.deptSrv.saveNewDept(this.deptObj).subscribe((res:any)=>{
      if (res.result) {
        alert('Department Created Successfully!!');
        this.getDepartment();
      } else {
        alert(res.message);
      }
    })
  }

  onUpdate(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.deptObj).subscribe((res:any)=>{
      debugger
      if(res.result) {
        debugger
        alert("Department Updated Successfully!!");
        this.getDepartment();
          } else {
          alert(res.message)
        }
    })
  }

  onDelete(id:number){
    const isDelete = confirm("Are You Sure You Want To Delete");
    if(isDelete){
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res:any)=>{
        debugger
        if(res.result) {
          debugger
          alert("Department Deleted Successfully!!");
          this.getDepartment();
            } else {
            alert(res.message)
          }
      })
    } 
  }

  // getDepartment(){
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
  //     this.deptList = res.data;
  //   })
  // }

  onEdit(data:any){
    this.deptObj = data;
  }

  getDepartment(){
    debugger;
    this.deptSrv.getAllDept().subscribe((res:any)=>{
      debugger;
      this.deptList = res.data;
    })
  }
}
