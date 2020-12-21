import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovedRequestLoanPage } from './approved-request-loan.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovedRequestLoanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovedRequestLoanPageRoutingModule {}
