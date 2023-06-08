import { Component, inject } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css']
})
export class CompanySearchComponent {
  companyService = inject(CompanyService)
  
  inputValue = ''

  onKeyup() {
    this.companyService.searchValue$.next(this.inputValue)
  }
}
