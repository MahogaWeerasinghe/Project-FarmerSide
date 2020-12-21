import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveloanPageRoutingModule } from './approveloan-routing.module';

import { ApproveloanPage } from './approveloan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveloanPageRoutingModule
  ],
  declarations: [ApproveloanPage]
})
export class ApproveloanPageModule {}
