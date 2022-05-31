import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { 
    firstName: String;
    lastName: String;
    email: String;
    phone_no: String;
    password: String;
  }

  ngOnInit(): void {
  }

  onClickSubmit(formData: { firstName: string; lastName: string; phone_no: string; email: string; password: string; }){
    console.log("firstName: " + formData.firstName);
    console.log("lastName: " + formData.lastName);
    console.log("Phone number: " + formData.phone_no);
    console.log("Email: "+formData.email);
    console.log("Password: " + formData.password );
  }
}
