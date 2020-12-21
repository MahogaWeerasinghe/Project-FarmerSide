import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObtainedLoansLoanPageRoutingModule } from './obtained-loans-loan-routing.module';

import { ObtainedLoansLoanPage } from './obtained-loans-loan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObtainedLoansLoanPageRoutingModule
  ],
  declarations: [ObtainedLoansLoanPage]
})
export class ObtainedLoansLoanPageModule {}
