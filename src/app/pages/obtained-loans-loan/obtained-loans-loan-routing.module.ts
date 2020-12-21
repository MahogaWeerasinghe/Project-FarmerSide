import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObtainedLoansLoanPage } from './obtained-loans-loan.page';

const routes: Routes = [
  {
    path: '',
    component: ObtainedLoansLoanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObtainedLoansLoanPageRoutingModule {}
