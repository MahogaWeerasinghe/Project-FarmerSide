import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoandetailsPage } from './loandetails.page';

const routes: Routes = [
  {
    path: '',
    component: LoandetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoandetailsPageRoutingModule {}
