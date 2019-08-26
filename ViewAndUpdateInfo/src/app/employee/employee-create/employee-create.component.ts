import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  employee: any;

  constructor(private employeeService: EmployeeService,  private http: HttpClient) { }

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    dateOfBirth:  new FormControl(''),
    dateOfJoining: new FormControl('')
  });

 OnSave() {
    console.log('employee:' + JSON.stringify(this.employeeForm.value));
    this.employeeService.save(this.employeeForm.value)
    .subscribe(data => {
      this.employee = data;
      console.log('saved:' + JSON.stringify(data));
    });
}
// tslint:disable-next-line: use-lifecycle-interface
ngOnInit(): void {
  this.employeeService.getEmployeeCreate()
  .subscribe (res => {
    this.employee = res;
    this.employeeService.setResult(this.employee);
    console.log(JSON.stringify(res));
  });
}
}
