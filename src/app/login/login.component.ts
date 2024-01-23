import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminapiService } from '../servcies/adminapi.service';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string=''
  password:string=''

constructor(private api:AdminapiService,private route:Router ){}

  login( ){  //classin ullil no fn required

    if(!this.email || !this.password ){
      alert('plesase fill the form ')
    }else{
    

      



  this.api.authorization().subscribe({
    next:(res:any)=>{
      const {email,password} = res
      if(email==this.email && password==this.password){
        Swal.fire({
          title: "Login Sucessfull",
         
          icon: "success",
          showConfirmButton: false,
          timer: 2000
        
        });

      //navigate to dashbaord

      this.route.navigateByUrl('dashboard')


      }else{
        Swal.fire("Error","Email or Password is incorrect ","error")
      }


  },
  error:(res:any)=>{
    console.log(res);
  }
})
    }
  }
  
  

}
