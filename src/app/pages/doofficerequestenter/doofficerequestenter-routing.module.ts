import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoofficerequestenterPage } from './doofficerequestenter.page';

const routes: Routes = [
  {
    path: '',
    component: DoofficerequestenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoofficerequestenterPageRoutingModule {}
