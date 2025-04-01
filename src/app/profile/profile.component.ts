import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userId = "";

  constructor (private route:ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe((data)=>{
      // console.log(data, typeof(data));
      this.userId = data['id'];
      
    })
  }

}
