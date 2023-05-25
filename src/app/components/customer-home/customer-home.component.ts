import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {CustomerService} from "../../services/customer.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {JobDTO} from "../../dto/JobDTO";
import {JobService} from "../../services/job.service";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit, OnDestroy{

  customerId! : number;

  jobs$! : Observable<JobDTO[]>;
  findJobByCustomerSubscription! : Subscription;

  displayedColumns : String[] = ["id", "description", "startDate", "endDate", "installments"];

  dataSource!: MatTableDataSource<JobDTO>;
  constructor(
    private customerService : CustomerService,
    private route : ActivatedRoute,
    private jobService : JobService) {
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) =>{
      this.customerId = parseInt(params.get("customerId")!);
    })

    this.jobs$ = this.jobService.findJobsByCustomerId(this.customerId);

    this.findJobByCustomerSubscription = this.jobs$.subscribe({
      next: data => {
        this.dataSource = new MatTableDataSource(data);
      }
    });

  }

  ngOnDestroy(): void {
    this.findJobByCustomerSubscription.unsubscribe();
  }

}
