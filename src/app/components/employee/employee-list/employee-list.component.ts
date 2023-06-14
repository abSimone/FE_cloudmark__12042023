import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeDTO } from 'src/app/dto/EmployeeDTO';
import { MatDialog, MatDialogRef, } from '@angular/material/dialog';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeUpdateFormComponent } from '../employee-update-form/employee-update-form.component';

import { saveAs } from 'file-saver';
import { EmployeeDeleteDialogComponent } from '../employee-delete-dialog/employee-delete-dialog.component';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeService = inject(EmployeeService);
  dialogDetail = inject(MatDialog);

  employeeList$?: EmployeeDTO[]

  isLoading: Boolean = true;

  ngOnInit(): void {
    this.refresh();
    this.employeeService.Refresh.subscribe((response) => this.refresh())
  }

  


  openDetail(employee: EmployeeDTO) {
    const dialogDetail = this.dialogDetail.open(EmployeeDetailComponent,
      {
        data: employee,
      }
    )
  }


  updateEmployee(employee: EmployeeDTO) {
    const dialogDetail = this.dialogDetail.open(EmployeeUpdateFormComponent,
      {
        data: employee,
        width: "700px",
      }
    )
  }

  deleteEmployeeOpenDialog(employee: EmployeeDTO) {
    this.dialogDetail.open(EmployeeDeleteDialogComponent,
      {
        data: employee
      }
    )
  }



  esportaCSV() {
    this.employeeService.getAllEmployeeCSV().subscribe((response: any) => {
      const now = new Date();
      let blob: any = new Blob([response], { type: 'text; charset=utf-8' });
      let fileName = 'employees' + now + '.csv';

      saveAs(blob, fileName);

    }), (error: any) => console.log('Error downloading the file'),
      () => console.info('File downloaded successfully');
  }


  refresh() {
    this.isLoading = true;
    this.employeeService.getAllEmployee().subscribe({
      next: (data) => {
        console.log(data);
        this.employeeList$ = data;
        this.isLoading = false;
      }
    });
  }





}
