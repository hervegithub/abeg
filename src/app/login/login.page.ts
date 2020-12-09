import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private router: Router) { 
    this.userConnect = {
      email:"",
      password:"",
    }
  }

  onSigIn(){
    this.router.navigate(['home']);
    //console.log('email:'+this.userConnect.email+' password:'+this.userConnect.password);
  }

  ngOnInit() {
  }

}
