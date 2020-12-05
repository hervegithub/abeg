import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  //name:string =  "Herve"
  email:string;
  password:string;
  otherPassword:string;

  constructor() { }

  onSignUp(){
    console.log(this.email);
  }

  ngOnInit() {
  }

}
