import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveddetailsPage } from './approveddetails.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveddetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveddetailsPageRoutingModule {}
