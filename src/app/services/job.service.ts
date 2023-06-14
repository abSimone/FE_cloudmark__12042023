import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JobDTO} from "../dto/JobDTO";

const urlFindAllJobsByCustomer = "http://15.161.64.149:8080/api/job/customer-id/"

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http : HttpClient ) {}

  findJobsByCustomerId(id : number) : Observable<JobDTO[]> {
    return this.http.get<JobDTO[]>(urlFindAllJobsByCustomer+id);

  }

}
