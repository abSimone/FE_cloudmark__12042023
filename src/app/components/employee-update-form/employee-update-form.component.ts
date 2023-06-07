import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeDTO } from 'src/app/dto/EmployeeDTO';
import { EmployeeService } from 'src/app/services/employee.service';
import { DatePipe } from '@angular/common'
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';






const regexEmail = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

@Component({
  selector: 'app-employee-update-form',
  templateUrl: './employee-update-form.component.html',
  styleUrls: ['./employee-update-form.component.css']
})
export class EmployeeUpdateFormComponent implements OnInit {

  fb = inject(FormBuilder)
  dialogData: EmployeeDTO = inject(MAT_DIALOG_DATA)
  employeeService = inject(EmployeeService);
  datePipe = inject(DatePipe);
  snackBar = inject(MatSnackBar);
  //spinner=inject(MatProgressSpinner);




  employee = this.fb.group({
    firstName: this.fb.control("", [Validators.maxLength(50), Validators.required]),
    lastName: this.fb.control("", [Validators.maxLength(50), Validators.required]),
    address: this.fb.control("", [Validators.maxLength(50), Validators.required]),
    cap: this.fb.control("", [Validators.maxLength(10), Validators.required]),
    city: this.fb.control("", [Validators.maxLength(20), Validators.required]),
    iban: this.fb.control("", [Validators.minLength(27), Validators.maxLength(27), Validators.required]),
    phoneNumber: this.fb.control("", [Validators.maxLength(20), Validators.required]),
    email: this.fb.control("", [Validators.maxLength(50), Validators.required, Validators.pattern(regexEmail)]),
    contractType: this.fb.control("", [Validators.required]),
    contractStart: this.fb.control("", [Validators.required]),
  })

  ngOnInit(): void {
    //assegna i valori dell'employee da aggiornare
    this.employee.patchValue({
      firstName: this.dialogData.firstName,
      lastName: this.dialogData.lastName,
      address: this.dialogData.address,
      cap: this.dialogData.cap,
      city: this.dialogData.city,
      iban: this.dialogData.iban,
      phoneNumber: this.dialogData.phoneNumber,
      email: this.dialogData.email,
      contractType: this.dialogData.contractType?.toString(),
      contractStart: this.dialogData.contractStart?.toString(),
    })
  }

  onSubmit() {
    //const spinner=this.spinner

    this.openSnackBar("Caricamento", ["loading-snackbar"])

    let employeeUpdated = {
      id: this.dialogData.id,
      firstName: this.employee.value.firstName!,
      lastName: this.employee.value.lastName!,
      address: this.employee.value.address!,
      cap: this.employee.value.cap!,
      city: this.employee.value.city!,
      iban: this.employee.value.iban!,
      phoneNumber: this.employee.value.phoneNumber!,
      email: this.employee.value.email!,
      contractType: this.employee.value.contractType!,
      contractStart: this.datePipe.transform(new Date(this.employee.value.contractStart!), 'yyyy-MM-dd') as unknown as Date,
      company: this.dialogData.company,
    }


    this.employeeService.updateEmployee(employeeUpdated).subscribe(
      (result: EmployeeDTO | HttpErrorResponse) => {
        console.log(result)

        this.openSnackBar("Successo", ["green-snackbar"])

      },
      (error) => {
        this.openSnackBar("Errore", ["red-snackbar"])
        console.log(error);
      }
    );

  }

  openSnackBar(text: string, panelClass: string[]) {
    this.snackBar.open(text, "close", {
      verticalPosition: "top",
      duration: 2000,
      panelClass: panelClass
    });
  }

  sendStatus() {
    if (!this.employee.controls.firstName.invalid
      && !this.employee.controls.lastName.invalid
      && !this.employee.controls.address.invalid
      && !this.employee.controls.cap.invalid
      && !this.employee.controls.city.invalid
      && !this.employee.controls.iban.invalid
      && !this.employee.controls.phoneNumber.invalid
      && !this.employee.controls.email.invalid
      && !this.employee.controls.contractType.invalid
      && !this.employee.controls.contractStart.invalid
    ) {
      return false
    }
    return true;
  }


}
