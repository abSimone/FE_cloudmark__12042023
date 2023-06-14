import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent {
  formBuilder = inject(FormBuilder)
  router = inject(Router)

  company = this.formBuilder.group({
    companyName: this.formBuilder.control('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    vatNumber: this.formBuilder.control('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    address: this.formBuilder.control('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    iban: this.formBuilder.control('', [
      Validators.required,
      Validators.maxLength(27)
    ]),
    phoneNumber: this.formBuilder.control('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(50)
    ]),
    pec: this.formBuilder.control('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(50)
    ]),
    fax: this.formBuilder.control('', [
      Validators.maxLength(11)
    ])
  });

  backToList() {
    this.router.navigate(['companies']);
  }
}
