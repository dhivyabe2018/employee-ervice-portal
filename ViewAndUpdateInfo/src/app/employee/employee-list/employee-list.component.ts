import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

 public employees: Employee[] = [];
  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService,
    private http: HttpClient) { }


  ngOnInit() {
    this.employeeService.getEmployeeCreate()
    .subscribe( data => {
      this.employees = data;
      this.employeeService.setData(this.employees);
      console.log( '1::' + JSON.stringify(this.employees));
    });
  }
}
