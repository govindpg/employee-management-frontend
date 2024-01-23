import { Component } from '@angular/core';
import { employeeModel } from '../employee.model';
import { AdminapiService } from '../servcies/adminapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {


  //varible to store the value from the box which have the same structure of model
  employee:employeeModel={}


  constructor(private api:AdminapiService){}


  cancelEmployees(){
    this.employee={}
  }

  addEmployee(){
    
    console.log(this.employee);
    if(!this.employee.name || !this.employee.id || !this.employee.email || !this.employee.status){

      Swal.fire({
        title: "plesase  fill the form  completely",
       
        icon: "info",
        showConfirmButton: false,
        
      
      });
      
    }
    else{
      this.api.addEmployeeApi(this.employee).subscribe({
        next:(res:employeeModel)=>{
          console.log(res);
          Swal.fire({
            title: "Added successfully",
           
            icon: "success",
            showConfirmButton: false,
            timer: 2000
          
          });
        },
        error:(err:any)=>{
          console.log(err);
          Swal.fire({
            title: "Error",
           
            icon: "error",
            showConfirmButton: false,
            
          
          });
          
        }
      })
  
    }







   


  }


}
