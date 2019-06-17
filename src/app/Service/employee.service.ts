import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Model/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empList: Employee[];
  jsonFileName = '../../assets/sample_data.json';

  constructor(private http: HttpClient) {
  }

  public getEmployeeList(): Observable<Employee[]> {
    // Reading JSON File
    return this.http.get<Employee[]>(this.jsonFileName);

  }

}
