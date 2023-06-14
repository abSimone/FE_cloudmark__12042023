import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EmployeeDTO } from '../dto/EmployeeDTO';
import { Subject, tap } from 'rxjs';

const urlAllEmployee = "http://15.161.64.149:8080/api/employee/"
const urlEmployeeById = "http://15.161.64.149:8080/api/employee/id/"
const urlUpdateEmployee = "http://15.161.64.149:8080/api/employee/"
const urlDeleteEmployee = "http://15.161.64.149:8080/api/employee/id/"
const urlAllEmployeeCsv = "http://15.161.64.149:8080/api/employee/csv"


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private refresh = new Subject<void>();

  get Refresh() {
    return this.refresh;
  }


  getAllEmployee() {
    return this.http.get<EmployeeDTO[]>(urlAllEmployee)
  }
  getEmployeeById(id: number) {
    return this.http.get<EmployeeDTO>(urlEmployeeById + id)
  }

  updateEmployee(employee: EmployeeDTO) {
    return this.http.put<EmployeeDTO | HttpErrorResponse>(urlUpdateEmployee, employee).pipe(
      tap(() => this.refresh.next())
    )
  }

  deleteEmployee(employee: EmployeeDTO) {
    return this.http.delete(urlDeleteEmployee + employee.id, { responseType: 'text' }).pipe(
      tap(() => this.refresh.next())
    )
  }


  getAllEmployeeCSV() {
    return this.http.get(urlAllEmployeeCsv, { responseType: 'text' });
  }
}
