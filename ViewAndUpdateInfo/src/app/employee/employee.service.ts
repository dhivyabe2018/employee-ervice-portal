import { Employee } from './employee.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/model/user.model';

export class EmployeeService {
  constructor(private http: HttpClient, private router: Router) { }
  public employees: Employee[] = [];

  getDetails(loginUser: User): Observable<Employee[]> {
    console.log('url:' + 'http://localhost:3000/api/employee/' + loginUser.email);
    return this.http.get<Employee[]>('http://localhost:3000/api/employee/' + loginUser.email);
  }

  save(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:3000/api/employee', employee);
  }

  setData( data: Employee[]) {
    this.employees = data;
  }

 // getEmployee(index: string) {
   // return this.employee[index];
 // }

  getEmployeeCreate(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/api/employee');
  }

  setResult(res: any) {
    this.employees = res;
  }
}
