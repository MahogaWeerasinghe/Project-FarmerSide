import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankloandetailsPageRoutingModule } from './bankloandetails-routing.module';

import { BankloandetailsPage } from './bankloandetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankloandetailsPageRoutingModule
  ],
  declarations: [BankloandetailsPage]
})
export class BankloandetailsPageModule {}
