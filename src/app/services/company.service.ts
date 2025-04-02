import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

  // get all company from the database
  getCompany(){
    let url = "http://127.0.0.1:8000/company/"
    return this.http.get(url);
  }
}
