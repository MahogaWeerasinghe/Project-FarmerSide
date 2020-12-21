import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRequestLoanPageRoutingModule } from './new-request-loan-routing.module';

import { NewRequestLoanPage } from './new-request-loan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRequestLoanPageRoutingModule
  ],
  declarations: [NewRequestLoanPage]
})
export class NewRequestLoanPageModule {}
