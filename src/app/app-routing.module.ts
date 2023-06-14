import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CustomerHomeComponent } from "./components/customer-home/customer-home.component";
import { CompanyAddComponent } from './components/company-add/company-add.component';

const routes: Routes = [
  { path: "alan", component: EmployeeListComponent },
  { path:"francesco", component : CustomerListComponent },
  { path:"francesco/:customerId", component : CustomerHomeComponent},
  // { path: "robert", component: CompanyHomeComponent },

  { path: "companies", component: CompanyListComponent },
  { path: "companies-add", component: CompanyAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
