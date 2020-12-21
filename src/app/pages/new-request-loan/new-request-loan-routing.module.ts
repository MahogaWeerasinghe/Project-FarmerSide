import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRequestLoanPage } from './new-request-loan.page';

const routes: Routes = [
  {
    path: '',
    component: NewRequestLoanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRequestLoanPageRoutingModule {}
