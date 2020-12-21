import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveloanPage } from './approveloan.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveloanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveloanPageRoutingModule {}
