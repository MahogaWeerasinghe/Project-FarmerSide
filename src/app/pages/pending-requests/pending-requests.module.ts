import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingRequestsPageRoutingModule } from './pending-requests-routing.module';

import { PendingRequestsPage } from './pending-requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingRequestsPageRoutingModule
  ],
  declarations: [PendingRequestsPage]
})
export class PendingRequestsPageModule {}
