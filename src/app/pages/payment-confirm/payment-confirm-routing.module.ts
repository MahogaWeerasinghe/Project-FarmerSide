import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentConfirmPage } from './payment-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentConfirmPageRoutingModule {}
