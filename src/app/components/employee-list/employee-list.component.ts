import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeDTO } from 'src/app/dto/EmployeeDTO';
import { MatDialog, MatDialogRef, } from '@angular/material/dialog';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeUpdateFormComponent } from '../employee-update-form/employee-update-form.component';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employeeService = inject(EmployeeService);


  employeeList$ = this.employeeService.getAllEmployee();

  isLoading:Boolean=true;

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe({
      next: (data) => {
        console.log(data);
        this.isLoading=false;

      }
    });
  }

  dialogDetail = inject(MatDialog);


  openDetail(employee: EmployeeDTO) {
    const dialogDetail = this.dialogDetail.open(EmployeeDetailComponent,
      {
        data: employee,
        
      }
    )
  }

  
  updateEmployee(employee: EmployeeDTO){
    const dialogDetail = this.dialogDetail.open(EmployeeUpdateFormComponent,
      {
        data: employee,
        width:"700px",
        
        
      }
    )
  }



  esportaCSV(){
    /* const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'abc.net/files/test.ino');
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove(); */
  }



  

}
