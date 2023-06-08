import { Component, inject } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { CompanyDTO } from 'src/app/dto/CompanyDTO';
import { CompanyService } from 'src/app/services/company.service';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { CompanySearchComponent } from '../company-search/company-search.component';


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

  showBottomSheet = false
  showExpansionPanel = false

  searchValue = ''

  
  ngOnInit() {
    this.companyService.getCompanies().subscribe({
      next: (data: CompanyDTO[]) => {
        console.log(data)
        this.companies = data
      },
      error: () => {
        console.log('getCompanies error')
      }
    })

    this.companyService.searchValue$.subscribe({
      next: (value: string) => {
        this.searchValue = value
        console.log(this.searchValue)
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
    }
    else {
      this.bottomSheet.dismiss()
    }
  }

}
