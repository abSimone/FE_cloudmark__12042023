import { Component } from '@angular/core';
import { CustomerServiceService} from "../../services/customer-service.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customers : any;

  constructor(private customerService : CustomerServiceService  ) {
  }

  ngOnInit(): void {
    this.customerService.findAll().subscribe((customers) => this.customers = customers);
  }

}
