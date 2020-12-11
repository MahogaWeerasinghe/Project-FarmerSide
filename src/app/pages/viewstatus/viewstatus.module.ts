import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewstatusPageRoutingModule } from './viewstatus-routing.module';

import { ViewstatusPage } from './viewstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewstatusPageRoutingModule
  ],
  declarations: [ViewstatusPage]
})
export class ViewstatusPageModule {}
