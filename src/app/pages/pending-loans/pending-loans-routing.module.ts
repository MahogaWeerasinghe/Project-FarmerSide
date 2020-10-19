import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingLoansPage } from './pending-loans.page';

const routes: Routes = [
  {
    path: '',
    component: PendingLoansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingLoansPageRoutingModule {}
