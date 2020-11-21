import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanviewsPage } from './loanviews.page';

const routes: Routes = [
  {
    path: '',
    component: LoanviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanviewsPageRoutingModule {}
