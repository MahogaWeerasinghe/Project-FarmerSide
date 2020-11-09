import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoandetailsPageRoutingModule } from './loandetails-routing.module';

import { LoandetailsPage } from './loandetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoandetailsPageRoutingModule
  ],
  declarations: [LoandetailsPage]
})
export class LoandetailsPageModule {}
