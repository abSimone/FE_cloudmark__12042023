import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './module/material.module';
import { DatePipe } from '@angular/common'

import { AppComponent } from './app.component';
import { CompanyHomeComponent } from './components/company-home/company-home.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';

import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CompanySearchComponent } from './components/company-search/company-search.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './components/employee/employee-detail/employee-detail.component';
import { EmployeeUpdateFormComponent } from './components/employee/employee-update-form/employee-update-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyHomeComponent,
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
