import { Component, inject } from '@angular/core';
import { CompanyDTO } from 'src/app/dto/CompanyDTO';
import { CompanyService } from 'src/app/services/company.service';
import { MatDialog } from '@angular/material/dialog';
import { CompanyDetailsComponent } from '../company-details/company-details.component';

import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { CompanySearchComponent } from '../company-search/company-search.component';


@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent {
  companyService = inject(CompanyService)
  matDialog = inject(MatDialog)

  companies?: CompanyDTO[]

  showBottomSheet = false

  constructor(private _bottomSheet: MatBottomSheet) {}

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
  }

  openDetails(company: CompanyDTO) {
    this.matDialog.open(CompanyDetailsComponent, {data: company})
  }

  openBottomSheet() {
    this.showBottomSheet = !this.showBottomSheet
    
    if (this.showBottomSheet == true) {
      this._bottomSheet.open(CompanySearchComponent, {
        hasBackdrop: false,
        restoreFocus: false
      });
    }
    else {
      this._bottomSheet.dismiss()
    }
  }

  value = '';
  panelOpenState = false;
}
