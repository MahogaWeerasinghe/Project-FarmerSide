import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObtainedLoansPage } from './obtained-loans.page';

const routes: Routes = [
  {
    path: '',
    component: ObtainedLoansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObtainedLoansPageRoutingModule {}
