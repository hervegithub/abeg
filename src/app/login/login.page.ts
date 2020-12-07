import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userConnect:UserLogin;

  email: string;
  password: string;
  
  constructor() { 
    this.userConnect = {
      email:"",
      password:"",
    }
  }

  onSigIn(){
    console.log('email:'+this.userConnect.email+' password:'+this.userConnect.password);
  }

  ngOnInit() {
  }

}
