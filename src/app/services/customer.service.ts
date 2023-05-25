import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerDTO} from "../dto/CustomerDTO";

const urlAllCustomers = "http://localhost:8080/api/customer/"
const urlCustomerById = "http://localhost:8080/api/customer/id/"
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) {}

  findAll() : Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>(urlAllCustomers);
  }

  findById(id : number) : Observable<CustomerDTO> {
    //const params : HttpParams = new HttpParams()
    return this.http.get<CustomerDTO>(urlCustomerById+id);

    /*  .set('customerId', id);
    return this.http.get<CustomerDTO>(urlCustomerById, {params : params});*/

  }
}
