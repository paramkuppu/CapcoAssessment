import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/Model/Employee';
import { EmployeeService } from '../../Service/employee.service';

@Component({
  selector: 'app-simple-employee-list',
  templateUrl: './simple-employee-list.component.html',
  styleUrls: ['./simple-employee-list.component.css']
})
export class SimpleEmployeeListComponent implements OnInit {

  empList: Employee[];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {

    // Get data and assign to table
    this.empService.getEmployeeList().subscribe(resData => {
      this.empList = resData;
    });

  }

}
