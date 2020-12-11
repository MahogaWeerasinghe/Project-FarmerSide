import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoofficerPage } from './doofficer.page';

const routes: Routes = [
  {
    path: '',
    component: DoofficerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoofficerPageRoutingModule {}
