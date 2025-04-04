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

  // delete single user from the database
  deleteEmployee(id:any){
    let url = "http://127.0.0.1:8000/delete_employee"
    return this.http.delete(url+"/"+id+"/");
  }

  // get single user from the database
  getSingleEmp(id:any){
    let url = "http://127.0.0.1:8000/employee"
    return this.http.get(url+"/"+id+"/");
  }


  updateInfo(emp:any){
    let url = "http://127.0.0.1:8000/edit_employee"
    return this.http.put(url+"/"+emp.empid+"/",emp);
  }
}
