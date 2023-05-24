import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http : HttpClient) {}

  findAll() : Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/customer/');
  }
}