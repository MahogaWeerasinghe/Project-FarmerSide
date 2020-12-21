import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObtainedLoanViewPage } from './obtained-loan-view.page';

const routes: Routes = [
  {
    path: '',
    component: ObtainedLoanViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObtainedLoanViewPageRoutingModule {}
