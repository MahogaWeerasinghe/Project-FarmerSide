import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingLoansPageRoutingModule } from './pending-loans-routing.module';

import { PendingLoansPage } from './pending-loans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingLoansPageRoutingModule
  ],
  declarations: [PendingLoansPage]
})
export class PendingLoansPageModule {}
