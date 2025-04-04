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
  empInfoUpdate:any;
  constructor(private employee:EmployeeService){}

  ngOnInit(){
    this.employee.getEmployees().subscribe((data: any)=>{
      // console.log(data);
      this.empInfo = data.Employees;
      
    })
  }


  deleteEmp(val:Number){
    let conformation = confirm("Do you want to Delete?")
    if(conformation){
      this.employee.deleteEmployee(val).subscribe((data: any)=>{
        // console.log(data); 
        if(data){
          this.ngOnInit();
        }
      })
    }
  }

  getSingleEmp(val:Number){
    this.employee.getSingleEmp(val).subscribe((data:any)=>{
      this.empInfoUpdate = data.Employee;
    })
    
  }

  updateInfo(){
    console.log("this is the uupdate info funcation");
    
  }
}


