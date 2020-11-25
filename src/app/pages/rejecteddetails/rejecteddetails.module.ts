import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejecteddetailsPageRoutingModule } from './rejecteddetails-routing.module';

import { RejecteddetailsPage } from './rejecteddetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejecteddetailsPageRoutingModule
  ],
  declarations: [RejecteddetailsPage]
})
export class RejecteddetailsPageModule {}
