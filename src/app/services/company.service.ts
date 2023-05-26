import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyDTO } from '../dto/CompanyDTO';


const url = 'http://localhost:8080/api/company/' 

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private httpClient: HttpClient) {}

  getCompanies() {
    return this.httpClient.get<CompanyDTO[]>(url);
  }
}
