import { Component, OnInit } from '@angular/core';

import {SAMPLEDATA} from '../../Model/sampledata';
import { Employee } from 'src/app/Model/Employee';

@Component({
  selector: 'app-simple-employee-list',
  templateUrl: './simple-employee-list.component.html',
  styleUrls: ['./simple-employee-list.component.css']
})
export class SimpleEmployeeListComponent implements OnInit {

  empList: Employee[];


  constructor() { }

  ngOnInit() {

    this.empList = SAMPLEDATA;

  }

}
