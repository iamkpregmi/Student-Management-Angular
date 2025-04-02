import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule, SweetAlert2Module],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})

export class AddEmployeeComponent {
  compInfo: any;
  constructor(private emp: EmployeeService,private employee: CompanyService) { }

  addEmployee(val: any) {
    // console.log("Function work", val);
    this.emp.addEmployees(val).subscribe((data: any) => {
      // console.log('Data successfully insert',data);
      Swal.fire({
        title: "Submited Successfully!",
        text: "Thank you!",
        icon: "success"
      });
    })
  }

  ngOnInit() {
    this.employee.getCompany().subscribe((data: any) => {
      // console.log(data);
      this.compInfo = data.Companies;
    })
  }

}
