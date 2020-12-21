import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovedRequestLoanPageRoutingModule } from './approved-request-loan-routing.module';

import { ApprovedRequestLoanPage } from './approved-request-loan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovedRequestLoanPageRoutingModule
  ],
  declarations: [ApprovedRequestLoanPage]
})
export class ApprovedRequestLoanPageModule {}
