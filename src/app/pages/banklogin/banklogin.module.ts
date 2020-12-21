import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankloginPageRoutingModule } from './banklogin-routing.module';

import { BankloginPage } from './banklogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankloginPageRoutingModule
  ],
  declarations: [BankloginPage]
})
export class BankloginPageModule {}
