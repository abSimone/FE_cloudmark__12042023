import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerDTO} from "../dto/CustomerDTO";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) {}

  findAll() : Observable<CustomerDTO[]> {
    return this.http.get<CustomerDTO[]>('http://localhost:8080/api/customer/');
  }
}
