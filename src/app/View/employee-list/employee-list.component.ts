import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import { Employee } from 'src/app/Model/Employee';
import { EmployeeService } from '../../Service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee;
  empServiceResponseData: Employee[];

  // Material Table configurations and variables
  empList = new MatTableDataSource<Employee>();
  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'company', 'date_entry',
                                'org_num', 'address_1', 'city', 'zip', 'geo', 'pan', 'pin', 'status',
                                'fee', 'guid', 'date_exit', 'date_first', 'date_recent', 'url', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {

    // Get the data from service and assign to the table
    this.empService.getEmployeeList()
        .subscribe(resData => {
          this.empServiceResponseData = resData;
          this.empList = new MatTableDataSource<Employee>(this.empServiceResponseData);
          this.empList.paginator = this.paginator;
        });

  }

  // Event Hander - Row Selection
  onSelect(emp: Employee): void {

    this.employee = emp;

    alert('ID: ' + this.employee.id + ',  ' + 'Employee Name: ' + this.employee.name);
  }

}
