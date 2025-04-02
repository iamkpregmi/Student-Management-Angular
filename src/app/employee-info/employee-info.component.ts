import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-info',
  imports: [FormsModule],
  templateUrl: './employee-info.component.html',
  styleUrl: './employee-info.component.css'
})
export class EmployeeInfoComponent {

  empInfo:any;
  constructor(private employee:EmployeeService){}

  ngOnInit(){
    this.employee.getEmployees().subscribe((data: any)=>{
      // console.log(data);
      this.empInfo = data.Employees;
    })
  }

}
