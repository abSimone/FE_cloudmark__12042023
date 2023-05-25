import { Component, inject } from '@angular/core';
import { CompanyDTO } from 'src/app/dto/CompanyDTO';
import { CompanyService } from 'src/app/services/company.service';
import { MatDialog } from '@angular/material/dialog';
import { CompanyDetailsComponent } from '../company-details/company-details.component';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent {
  companyService = inject(CompanyService)
  matDialog = inject(MatDialog)

  companies?: CompanyDTO[]

  ngOnInit() {
    this.companyService.getCompanies().subscribe({
      next: (data: any) => {
        console.log(data)
        this.companies = data
      },
      error: () => {
        console.log('getCompanies error')
      }
    })
  }

  openDetails(company: CompanyDTO) {
    this.matDialog.open(CompanyDetailsComponent, {data: company})
  }

  value = 'Clear me';
}
