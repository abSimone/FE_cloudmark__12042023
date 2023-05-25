import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeDTO } from '../dto/EmployeeDTO';
import { switchMap, toArray ,from} from 'rxjs';

const urlAllEmployee="http://localhost:8080/api/employee/"
const urlEmployeeById="http://localhost:8080/api/employee/id/"

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


  getAllEmployee(){
    return this.http.get<EmployeeDTO[]>(urlAllEmployee)
      .pipe(
        switchMap((array:EmployeeDTO[])=>from(array)),
        toArray()
      )
  }
  getEmployeeById(id:number){
    return this.http.get<EmployeeDTO>(urlAllEmployee+id)
  }
}
