import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingReasonPage } from './pending-reason.page';

const routes: Routes = [
  {
    path: '',
    component: PendingReasonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingReasonPageRoutingModule {}
