import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule, SweetAlert2Module],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  constructor(private emp:EmployeeService){}

  addEmployee(val:any){
    // console.log("Function work", val);
    this.emp.addEmployees(val).subscribe((data:any)=>{
      // console.log('Data successfully insert',data);
      Swal.fire({
        title: "Submited Successfully!",
        text: "Thank you!",
        icon: "success"
      });
    })
  }

}
