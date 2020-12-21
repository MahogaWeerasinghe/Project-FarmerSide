import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankintroPage } from './bankintro.page';

const routes: Routes = [
  {
    path: '',
    component: BankintroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankintroPageRoutingModule {}
