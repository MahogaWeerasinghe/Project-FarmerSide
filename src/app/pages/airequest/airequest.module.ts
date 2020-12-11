import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirequestPageRoutingModule } from './airequest-routing.module';

import { AirequestPage } from './airequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirequestPageRoutingModule
  ],
  declarations: [AirequestPage]
})
export class AirequestPageModule {}
