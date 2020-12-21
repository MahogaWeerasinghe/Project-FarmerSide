import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObtainLoansPage } from './obtain-loans.page';

const routes: Routes = [
  {
    path: '',
    component: ObtainLoansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObtainLoansPageRoutingModule {}
