import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentdetailsPageRoutingModule } from './paymentdetails-routing.module';

import { PaymentdetailsPage } from './paymentdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentdetailsPageRoutingModule
  ],
  declarations: [PaymentdetailsPage]
})
export class PaymentdetailsPageModule {}
