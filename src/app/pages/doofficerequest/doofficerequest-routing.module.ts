import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoofficerequestPage } from './doofficerequest.page';

const routes: Routes = [
  {
    path: '',
    component: DoofficerequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoofficerequestPageRoutingModule {}
