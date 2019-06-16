import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import {SAMPLEDATA} from '../../Model/sampledata';
import { Employee } from 'src/app/Model/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee;
  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'company', 'date_entry',
                                'org_num', 'address_1', 'city', 'zip', 'geo', 'pan', 'pin', 'status',
                                'fee', 'guid', 'date_exit', 'date_first', 'date_recent', 'url', 'action'];
  empList = new MatTableDataSource<Employee>(SAMPLEDATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {

    this.empList.paginator = this.paginator;

  }

  onSelect(emp: Employee): void{
    this.employee = emp;

    alert('ID: ' + this.employee.id + ',  ' + 'Employee Name: ' + this.employee.name);
  }

}
