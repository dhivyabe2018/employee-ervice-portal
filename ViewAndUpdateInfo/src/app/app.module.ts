import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EmployeeService } from './employee/employee.service';
import { EmployeeModule } from './employee/employee.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { EmployeeRoutingModule } from './employee/employee-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonMaterialModule } from './shared/common-material/common-material.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    RouterModule,
    LoginModule,
    LoginRoutingModule,
    EmployeeRoutingModule,
    BrowserAnimationsModule,
    CommonMaterialModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
