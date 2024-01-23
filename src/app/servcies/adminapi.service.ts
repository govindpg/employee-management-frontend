import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeModel } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor( private http:HttpClient) { }

  server_URL = 'http://localhost:4000'

  authorization(){
   return  this.http.get(`${this.server_URL}/employees/1`)
  }


  addEmployeeApi(employee:employeeModel){
    return this.http.post(`${this.server_URL}/employees`,employee)
  }

getallEmployeeApi(){
  return this.http.get(`${this.server_URL}/employees`)
}

deleteEmployeeApi(id:any){
  return this.http.delete(`${this.server_URL}/employees/${id}`)
}


geteditemployee(id:any){
  return this.http.get(`${this.server_URL}/employees/${id}`)
}


//to update 
updateEmployeeapi(id:any,employee:any){
  this.http.put(`${this.server_URL}/employee/${id}`,employee)
}

}
