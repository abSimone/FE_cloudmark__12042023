import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeDTO } from '../dto/EmployeeDTO';
import { switchMap, toArray ,from} from 'rxjs';

const urlEmployee="http://localhost:8080/api/employee/"

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


  getAllEmployee(){
    return this.http.get<EmployeeDTO[]>(urlEmployee)
      .pipe(
        switchMap((array:EmployeeDTO[])=>from(array)),
        toArray()
      )
  }
}
