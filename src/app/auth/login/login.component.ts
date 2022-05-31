import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { 
    firstName: String;
    password: String;
  }

  ngOnInit(): void {}
  onClickSubmit(formData: { firstName: string; password: string; }) {
    console.log("UserName: " + formData.firstName);
    console.log("Password: " + formData.password );
  }
}
