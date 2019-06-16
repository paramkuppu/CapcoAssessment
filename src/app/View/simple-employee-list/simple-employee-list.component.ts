import { Component, OnInit } from '@angular/core';

//import {SAMPLEDATA} from '../../Model/sampledata';
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

    this.empList = this.empService.getEmployeeList();

  }

}
