import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveddetailsPageRoutingModule } from './approveddetails-routing.module';

import { ApproveddetailsPage } from './approveddetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveddetailsPageRoutingModule
  ],
  declarations: [ApproveddetailsPage]
})
export class ApproveddetailsPageModule {}
