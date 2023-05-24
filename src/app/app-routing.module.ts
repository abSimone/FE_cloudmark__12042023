import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: "alan", component: EmployeeListComponent },
  { path:"francesco", component : CustomerListComponent},
  //{ path: "robert" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
