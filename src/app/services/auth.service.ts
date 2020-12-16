import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private alertCtrl:AlertController) { }

  //La fonction sign up

  onSignUpWithEmailAndPassword(email:string, password:string){
    return new Promise((resolve,reject)=> {
      this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((promise)=>{
        resolve(promise.user.uid);
      }).catch(err => reject(err));
    })
  }

  //La fonction sign In
  onSignInWithEmailAndPassword(email:string, password:string){
    return new Promise((resolve,reject)=> {
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then((promise)=>{
        resolve(promise.user.uid);
      }).catch(err => reject(err));
    })
  }

  onLogOut(){
    this.afAuth.signOut();
  }


  async showAlert(message:string){
    let alert = await this.alertCtrl.create({
      header:"Confirmation",
      message: message,
      buttons: ['OK'],
    });
    alert.present();
  }
  
}
