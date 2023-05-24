import { Component,inject,OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  

  employeeService=inject(EmployeeService);


  employeeList$=this.employeeService.getAllEmployee();


  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe({
      next:(data) =>{
        console.log(data);
      }
    });
  }



}
