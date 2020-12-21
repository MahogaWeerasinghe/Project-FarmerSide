import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingRequestViewPage } from './pending-request-view.page';

const routes: Routes = [
  {
    path: '',
    component: PendingRequestViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingRequestViewPageRoutingModule {}
