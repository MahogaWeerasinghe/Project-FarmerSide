import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingRequestViewPageRoutingModule } from './pending-request-view-routing.module';

import { PendingRequestViewPage } from './pending-request-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingRequestViewPageRoutingModule
  ],
  declarations: [PendingRequestViewPage]
})
export class PendingRequestViewPageModule {}
