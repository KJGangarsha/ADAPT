import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string="/assets/data/employees.json";

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<IEmployee[]>{
    /*return [
      {"id":1,"name":"Andrew","age":30},
      {"id":2,"name":"Brandon","age":25},
      {"id":3,"name":"Christie","age":26},
      {"id":4,"name":"Elena","age":28}
  ];*/
  return this.http.get<IEmployee[]>(this._url);
  }
}
