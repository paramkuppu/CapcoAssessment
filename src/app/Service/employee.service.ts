import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Model/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empList: Employee[];

  constructor(private http: HttpClient) {
  }

  public getEmployeeList(){

    this.http.get('../../assets/sample_data.json').subscribe(
      resData => {
        this.empList = resData as Employee[];
      }
    );

    return this.empList;

  }


}
