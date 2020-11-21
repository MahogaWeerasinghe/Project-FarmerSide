import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanviewsPageRoutingModule } from './loanviews-routing.module';

import { LoanviewsPage } from './loanviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanviewsPageRoutingModule
  ],
  declarations: [LoanviewsPage]
})
export class LoanviewsPageModule {}
