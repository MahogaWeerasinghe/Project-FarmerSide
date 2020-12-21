import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingRequestLoanPageRoutingModule } from './pending-request-loan-routing.module';

import { PendingRequestLoanPage } from './pending-request-loan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingRequestLoanPageRoutingModule
  ],
  declarations: [PendingRequestLoanPage]
})
export class PendingRequestLoanPageModule {}
