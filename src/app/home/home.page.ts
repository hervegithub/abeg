import { NewBookPage } from './../new-book/new-book.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController, private router: Router) {}

  async onShowModal(){
    const modal = await this.modalCtrl.create(
      {
        component:NewBookPage,
        cssClass:"modal-class"
      }
    );
    return await modal.present();
  }

  onSingleBook(){
    this.router.navigate(['single-book']);
  }

}
