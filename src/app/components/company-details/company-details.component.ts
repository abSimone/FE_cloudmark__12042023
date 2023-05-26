import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyDTO } from 'src/app/dto/CompanyDTO';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent {
  dialogData: CompanyDTO = inject(MAT_DIALOG_DATA)
}