import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejectedLoansPage } from './rejected-loans.page';

const routes: Routes = [
  {
    path: '',
    component: RejectedLoansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejectedLoansPageRoutingModule {}
