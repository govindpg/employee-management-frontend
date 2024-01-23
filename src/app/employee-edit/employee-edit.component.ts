import { Component, OnInit } from '@angular/core';
import { employeeModel } from '../employee.model';
import { ActivatedRoute } from '@angular/router';
import { AdminapiService } from '../servcies/adminapi.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {


employee:employeeModel={}

constructor(private  router:ActivatedRoute,private api:AdminapiService ){}


ngOnInit(): void {
  this.router.params.subscribe((res:any)=>{
const {id}= res
this.viewemployee(id)

  })
}

viewemployee(id:string){
this.api.geteditemployee(id).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.employee=res
    
  },error:(err:any)=>{
    console.log(err);
    
  }
})
}

// editemployee(id:any){
//   this.api.updateEmployeeapi(id,this.employee).subscribe({
//     next:(res:any)=>{console.log(res),alert('updated')},
//     error:(err:any)=>{
//       console.log(err);
      
//     }
//   })
// }

}

