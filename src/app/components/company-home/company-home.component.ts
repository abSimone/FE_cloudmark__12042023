import { Component, inject } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent {
  companyService = inject(CompanyService)

  ngOnInit() {
    this.companyService.getCompanies().subscribe({
      next: (data: any) => {
        console.log(data)
      },
      error: () => {
        console.log('getCompanies error')
      }
    })
  }
}
