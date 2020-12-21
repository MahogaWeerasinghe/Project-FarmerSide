import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovedRequestsPage } from './approved-requests.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovedRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovedRequestsPageRoutingModule {}
