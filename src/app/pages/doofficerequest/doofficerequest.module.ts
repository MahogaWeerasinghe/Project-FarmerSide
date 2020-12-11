import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoofficerequestPageRoutingModule } from './doofficerequest-routing.module';

import { DoofficerequestPage } from './doofficerequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoofficerequestPageRoutingModule
  ],
  declarations: [DoofficerequestPage]
})
export class DoofficerequestPageModule {}
