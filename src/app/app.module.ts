import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './module/material.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyHomeComponent } from './components/company-home/company-home.component';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';


import { FlexLayoutModule } from "@angular/flex-layout";
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeUpdateFormComponent } from './components/employee-update-form/employee-update-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'


@NgModule({
  declarations: [
    AppComponent,
    CompanyHomeComponent,
    EmployeeListComponent,
    CustomerListComponent,
    EmployeeDetailComponent,
    EmployeeUpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
