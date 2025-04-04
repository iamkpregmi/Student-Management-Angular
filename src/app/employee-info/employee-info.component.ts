import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-info',
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-info.component.html',
  styleUrl: './employee-info.component.css'
})
export class EmployeeInfoComponent {

  empInfo: any;
  empInfoUpdate: any;
  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    this.employee.getEmployees().subscribe((data: any) => {
      // console.log(data);
      this.empInfo = data.Employees;

    })
  }


  deleteEmp(val: Number) {
    let conformation = confirm("Do you want to Delete?")
    if (conformation) {
      this.employee.deleteEmployee(val).subscribe((data: any) => {
        // console.log(data); 
        if (data) {
          this.ngOnInit();
        }
      })
    }
  }

  getSingleEmp(val: Number) {
    this.employee.getSingleEmp(val).subscribe((data: any) => {
      this.empInfoUpdate = data.Employee;
    })

  }

  updateInfo(val: any) {
    this.employee.updateInfo(val).subscribe((data: any) => {
      if (data) {
        this.ngOnInit();

        const modal = document.getElementById('employeeModal');
        if (modal) {
          modal.style.display = 'none';

          const backdrop = document.querySelector('.modal-backdrop');
          if (backdrop) {
            backdrop.remove();
          }
        }
      }
    })
  }
}


