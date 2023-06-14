import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeDTO } from 'src/app/dto/EmployeeDTO';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-delete-dialog',
  templateUrl: './employee-delete-dialog.component.html',
  styleUrls: ['./employee-delete-dialog.component.css']
})
export class EmployeeDeleteDialogComponent {

  dialogData: EmployeeDTO = inject(MAT_DIALOG_DATA)
  employeeService = inject(EmployeeService);

  snackBar=inject(MatSnackBar);

  deleteEmployee(){
    this.openSnackBar("Caricamento", ["loading-snackbar"])

    this.employeeService.deleteEmployee(this.dialogData).subscribe(
      (result) => {
        console.log(result)
        this.openSnackBar("Successo", ["green-snackbar"])

      },
      (error) => {
        this.openSnackBar("Errore", ["red-snackbar"])

        console.log(error);
      }
      )
  }


  openSnackBar(text: string, panelClass: string[]) {
    this.snackBar.open(text, "close", {
      verticalPosition: "top",
      duration: 2000,
      panelClass: panelClass
    });
  }
}
