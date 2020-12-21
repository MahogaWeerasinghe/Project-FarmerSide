import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankintroPageRoutingModule } from './bankintro-routing.module';

import { BankintroPage } from './bankintro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankintroPageRoutingModule
  ],
  declarations: [BankintroPage]
})
export class BankintroPageModule {}
