import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanRequestsPageRoutingModule } from './loan-requests-routing.module';

import { LoanRequestsPage } from './loan-requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanRequestsPageRoutingModule
  ],
  declarations: [LoanRequestsPage]
})
export class LoanRequestsPageModule {}
