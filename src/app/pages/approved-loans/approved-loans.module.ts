import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovedLoansPageRoutingModule } from './approved-loans-routing.module';

import { ApprovedLoansPage } from './approved-loans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovedLoansPageRoutingModule
  ],
  declarations: [ApprovedLoansPage]
})
export class ApprovedLoansPageModule {}
