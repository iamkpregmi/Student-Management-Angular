import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  studentData = [
    {
      "student_id": "ST115",
      "student_name": "Krishna Prasad Regmi",
      "course": "M.C.A.",
      "admission_Date": "2022-03-27",
      "fee": 25000,
      "cource_duration": 2
    },
    {
      "student_id": "ST116",
      "student_name": "Mohd Shubair",
      "course": "B.Tech",
      "admission_Date": "2021-04-27",
      "fee": 40000,
      "cource_duration": 4
    },
    {
      "student_id": "ST072",
      "student_name": "Brijesh Mishra",
      "course": "M.C.A.",
      "admission_Date": "2024-03-01",
      "fee": 25000,
      "cource_duration": 2
    },
    {
      "student_id": "DB001",
      "student_name": "Ansh Arya",
      "course": "B.B.A.",
      "admission_Date": "2018-01-01",
      "fee": 80000,
      "cource_duration": 3
    },
    {
      "student_id": "DB005",
      "student_name": "Himanshu Yadav",
      "course": "M.C.A.",
      "admission_Date": "2025-01-01",
      "fee": 40000,
      "cource_duration": 2
    }
  ];

}
