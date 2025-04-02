import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  // get all employee from the database
  getEmployees(){
    let url = "http://127.0.0.1:8000/employee/"
    return this.http.get(url);
  }

  // insert single user to the database
  addEmployees(emp:any){
    let url = "http://127.0.0.1:8000/add_employee/"
    return this.http.post(url,emp);
  }


}
