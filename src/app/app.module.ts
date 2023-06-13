import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';
import { DatePipe } from '@angular/common'

import { AppComponent } from './app.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeUpdateFormComponent } from './components/employee-update-form/employee-update-form.component';
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CompanySearchComponent } from './components/company-search/company-search.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailsComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeUpdateFormComponent,
    CustomerHomeComponent,
    CustomerListComponent,
    CompanySearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    DatePipe
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
