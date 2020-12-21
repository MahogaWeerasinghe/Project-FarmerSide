import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingReasonPageRoutingModule } from './pending-reason-routing.module';

import { PendingReasonPage } from './pending-reason.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingReasonPageRoutingModule
  ],
  declarations: [PendingReasonPage]
})
export class PendingReasonPageModule {}
