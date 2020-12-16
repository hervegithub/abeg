import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private alertCtrl:AlertController) {
    this.registerForm = this.fb.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(5)]],
        passwordVerification: [null, [Validators.required, Validators.minLength(5)]]
      }
    )
  }

  onSignUp(valeur: any){

    if(valeur.password === valeur.passwordVerification){
      this.authService.onSignUpWithEmailAndPassword(valeur.email, valeur.password)
      .then((uid:string)=>{
        this.authService.showAlert('Vous êtes enregisté!');
      }).catch((err)=> this.authService.showAlert("Une erreur c'est produite!"));
    }

  }

  

  ngOnInit() {
  }

}
