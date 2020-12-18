import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DohistorydetailsPageRoutingModule } from './dohistorydetails-routing.module';

import { DohistorydetailsPage } from './dohistorydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DohistorydetailsPageRoutingModule
  ],
  declarations: [DohistorydetailsPage]
})
export class DohistorydetailsPageModule {}
