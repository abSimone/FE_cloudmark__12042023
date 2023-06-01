import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {CustomerDTO} from "../../dto/CustomerDTO";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy{

  customerList$: Observable<CustomerDTO[]> = this.customerService.findAll();
  findAllSubscription! : Subscription;
  isLoading : boolean = true;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.findAllSubscription = this.customerService.findAll().subscribe({
      next: data => {
        console.log(data);
        this.isLoading = false;
      }
    });

  }


  ngOnDestroy(): void {
    this.findAllSubscription.unsubscribe();
  }
}
