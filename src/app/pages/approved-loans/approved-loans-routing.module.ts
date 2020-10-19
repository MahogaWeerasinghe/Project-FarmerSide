import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovedLoansPage } from './approved-loans.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovedLoansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovedLoansPageRoutingModule {}
