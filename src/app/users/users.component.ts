import { Component, OnInit } from '@angular/core';
import { AdminapiService } from '../servcies/adminapi.service';
import { employeeModel } from '../employee.model';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  //Oninit is an interface to  implement ngoninit
  constructor(private api: AdminapiService) {}

  //for pagination
  p: number = 1;



  allemployee: employeeModel[] = [];

  ngOnInit(): void {
    this.allEmployeeDetails();
  }

  allEmployeeDetails() {
    this.api.getallEmployeeApi().subscribe({
      next: (res: any) => {
        this.allemployee = res;
        console.log(this.allemployee);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  deleteEmployees(id: any) {
    this.api.deleteEmployeeApi(id).subscribe({
      next: (res: any) => {
        console.log(res);

        this.allEmployeeDetails();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  genertepdf() {
    //create object pdf
    const pdf = new jsPDF();
    let head = [['Id', 'Employee name', 'Email', 'Status']];
    let body: any = [];

    this.allemployee.forEach((item: any) => {
      body.push([item.id, item.name, item.email, item.status]);
    });

    pdf.setFontSize(20);
    pdf.text('Employee Details', 10, 10); //title
    autoTable(pdf, { head, body });
    pdf.output('dataurlnewwindow');
    pdf.save('Employee.pdf');
  }
}
