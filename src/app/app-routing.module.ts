import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CompanyHomeComponent } from './components/company-home/company-home.component';
import {CustomerHomeComponent} from "./components/customer-home/customer-home.component";

const routes: Routes = [
  { path: "alan", component: EmployeeListComponent },
  { path:"francesco", component : CustomerListComponent },
  { path:"francesco/:customerId", component : CustomerHomeComponent},
  // { path: "robert", component: CompanyHomeComponent },

  { path: "companies", component: CompanyHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
