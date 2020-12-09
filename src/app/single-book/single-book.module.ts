import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleBookPageRoutingModule } from './single-book-routing.module';

import { SingleBookPage } from './single-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleBookPageRoutingModule
  ],
  declarations: [SingleBookPage]
})
export class SingleBookPageModule {}
