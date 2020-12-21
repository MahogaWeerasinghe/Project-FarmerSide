import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObtainedLoanViewPageRoutingModule } from './obtained-loan-view-routing.module';

import { ObtainedLoanViewPage } from './obtained-loan-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObtainedLoanViewPageRoutingModule
  ],
  declarations: [ObtainedLoanViewPage]
})
export class ObtainedLoanViewPageModule {}
