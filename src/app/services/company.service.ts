import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CompanyDTO } from '../dto/CompanyDTO';


const url = 'http://localhost:8080/api/company/'
const url2 = 'http://15.161.64.149:8080/api/company/'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  httpClient = inject(HttpClient)

  searchValue$ = new Subject<string>()

  getCompanies() {
    return this.httpClient.get<CompanyDTO[]>(url2);
  }
}
