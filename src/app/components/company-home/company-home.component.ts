import { Component, inject } from '@angular/core';
import { CompanyDTO } from 'src/app/dto/CompanyDTO';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent {
  companyService = inject(CompanyService)
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

  value = 'Clear me';
}
