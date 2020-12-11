import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewstatusdetailsPageRoutingModule } from './viewstatusdetails-routing.module';

import { ViewstatusdetailsPage } from './viewstatusdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewstatusdetailsPageRoutingModule
  ],
  declarations: [ViewstatusdetailsPage]
})
export class ViewstatusdetailsPageModule {}
