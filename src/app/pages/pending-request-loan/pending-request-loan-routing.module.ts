import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingRequestLoanPage } from './pending-request-loan.page';

const routes: Routes = [
  {
    path: '',
    component: PendingRequestLoanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingRequestLoanPageRoutingModule {}
