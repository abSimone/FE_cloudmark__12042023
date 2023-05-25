import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const url = 'http://localhost:8080/api/company/' 

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private httpClient: HttpClient) {}

  getCompanies() {
    return this.httpClient.get(url);
  }
}
