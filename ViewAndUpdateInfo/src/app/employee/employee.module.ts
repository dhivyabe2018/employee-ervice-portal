import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { EmployeeRoutingModule } from './employee-routing.module';



@NgModule({
  declarations: [ EmployeeListComponent, EmployeeCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeeRoutingModule

  ],
  providers: [EmployeeService],
  exports: [ EmployeeListComponent, EmployeeCreateComponent]
})
export class EmployeeModule { }
