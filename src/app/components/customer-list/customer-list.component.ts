import {Component} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {CustomerDTO} from "../../dto/CustomerDTO";
import {Observable} from "rxjs";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customerList$: Observable<CustomerDTO[]> = this.customerService.findAll();

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.findAll().subscribe({next: data => console.log(data)});
  }

}
