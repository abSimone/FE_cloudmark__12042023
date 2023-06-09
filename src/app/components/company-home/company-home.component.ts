import { Component, inject } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { CompanyDTO } from 'src/app/dto/CompanyDTO';
import { CompanyService } from 'src/app/services/company.service';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { CompanySearchComponent } from '../company-search/company-search.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent {
  companyService = inject(CompanyService)
  matDialog = inject(MatDialog)
  bottomSheet = inject(MatBottomSheet)

  companies?: CompanyDTO[]
  filteredCompanies?: CompanyDTO[]

  showBottomSheet = false
  showExpansionPanel = false
  searchIconState = 'search'

  ngOnInit() {
    this.companyService.getCompanies().subscribe({
      next: (data: CompanyDTO[]) => {
        console.log(data)
        this.companies = data
        this.filteredCompanies = data
      },
      error: (error) => {
        console.log('getCompanies error: ', error)
      }
    })

    this.companyService.searchValue$.subscribe({
      next: (value: string) => {
        if (value != '') {
          let companyNames = this.companies?.filter((company) => company.companyName.includes(value))
          let addresses = this.companies?.filter((company) => company.address.includes(value))
          let emails = this.companies?.filter((company) => company.email.includes(value))
          let phoneNumbers = this.companies?.filter((company) => company.phoneNumber.toString().includes(value))

          // merge arrays
          let searchResults = companyNames!.concat(addresses!, emails!, phoneNumbers!)

          // remove duplicates
          let ids = searchResults.map(({id}) => id);
          this.filteredCompanies = searchResults.filter(({id}, index) => !ids.includes(id, index + 1));
        }
        else {
          this.filteredCompanies = this.companies
        }
      }
    })
  }

  openDetails(company: CompanyDTO) {
    this.matDialog.open(CompanyDetailsComponent, {
      data: company,
      autoFocus: false,
      restoreFocus: false
    })
  }

  openBottomSheet() {
    this.showBottomSheet = !this.showBottomSheet
    
    if (this.showBottomSheet == true) {
      this.bottomSheet.open(CompanySearchComponent, {
        autoFocus: false,
        restoreFocus: false,
        hasBackdrop: false,
        disableClose: true
      });
      this.searchIconState = 'close'
    }
    else {
      this.bottomSheet.dismiss()
      this.searchIconState = 'search'
      this.filteredCompanies = this.companies
    }
  }

}
