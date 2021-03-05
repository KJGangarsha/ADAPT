import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template:`
  <h2>Employee List</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
  `
})
export class EmployeeListComponent implements OnInit {

  public employees=[] as any;
  public errorMsg: any;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() 
  {
    this._employeeService.getEmployees()
        .subscribe((data: any) => this.employees = data);
  }

} 