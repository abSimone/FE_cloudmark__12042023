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

  searchValue = ''

  ngOnInit() {
    this.companyService.getCompanies().subscribe({
      next: (data: CompanyDTO[]) => {
        console.log(data)
        this.companies = data
        this.filteredCompanies = data
      },
      error: () => {
        console.log('getCompanies error')
      }
    })

    this.companyService.searchValue$.subscribe({
      next: (value: string) => {
        if (value != '') {
          this.filteredCompanies = this.companies?.filter((company) => company.companyName.includes(value))
        }
        else {
          this.filteredCompanies = this.companies
        }
        // this.searchValue = value
        // console.log(this.searchValue)
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
        hasBackdrop: false,
        restoreFocus: false
      });
      this.searchIconState = 'close'
    }
    else {
      this.bottomSheet.dismiss()
      this.searchIconState = 'search'
    }
  }

}
