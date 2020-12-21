import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovedRequestViewPage } from './approved-request-view.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovedRequestViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovedRequestViewPageRoutingModule {}
