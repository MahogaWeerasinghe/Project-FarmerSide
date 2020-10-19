import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectedLoansPageRoutingModule } from './rejected-loans-routing.module';

import { RejectedLoansPage } from './rejected-loans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectedLoansPageRoutingModule
  ],
  declarations: [RejectedLoansPage]
})
export class RejectedLoansPageModule {}
