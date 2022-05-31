import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //colorCode:String;
  firstName = '';
  lastName = '';
  mobile1 = '';
  mobile2 = '';
  email = '';

  color = 0;
  constructor() { 
      
  }

  ngOnInit(): void {
  }

  // getColor(){
  //   return colorCode
  // }
}
