import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerListComponent} from "./components/customer-list/customer-list.component";


const routes: Routes = [
 /* {path:"/alan"},
  {path:"/robert"},*/
  {path:"francesco", component : CustomerListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
