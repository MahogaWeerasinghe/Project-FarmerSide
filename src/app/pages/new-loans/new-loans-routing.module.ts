import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewLoansPage } from './new-loans.page';

const routes: Routes = [
  {
    path: '',
    component: NewLoansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLoansPageRoutingModule {}
