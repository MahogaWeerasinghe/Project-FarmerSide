import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirequestenterPageRoutingModule } from './airequestenter-routing.module';

import { AirequestenterPage } from './airequestenter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirequestenterPageRoutingModule
  ],
  declarations: [AirequestenterPage]
})
export class AirequestenterPageModule {}
