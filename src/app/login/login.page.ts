import { AuthService } from './../services/auth.service';
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
  
  constructor(private router: Router, private authService:AuthService) { 
    this.userConnect = {
      email:"",
      password:"",
    }
  }

  onSigIn(){
    this.authService.onSignInWithEmailAndPassword(this.userConnect.email, this.userConnect.password)
    .then((uid:string) =>{
      this.router.navigate(['home']);
    }).catch(err => this.authService.showAlert("Une erreur c'est produite"));
    
  }

  ngOnInit() {
  }

}
