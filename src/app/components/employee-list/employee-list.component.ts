import { Component,inject,OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeDTO } from 'src/app/dto/EmployeeDTO';
import { MatDialog, MatDialogRef, } from '@angular/material/dialog';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';


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

  dialogDetail=inject(MatDialog);
  openDetail(employee:EmployeeDTO){
    const dialogRed=this.dialogDetail.open(EmployeeDetailComponent,{data:employee})
  }



}
