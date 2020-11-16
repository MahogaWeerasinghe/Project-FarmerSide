import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatedetailsPageRoutingModule } from './updatedetails-routing.module';

import { UpdatedetailsPage } from './updatedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatedetailsPageRoutingModule
  ],
  declarations: [UpdatedetailsPage]
})
export class UpdatedetailsPageModule {}
