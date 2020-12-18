import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DohistoryPage } from './dohistory.page';

const routes: Routes = [
  {
    path: '',
    component: DohistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DohistoryPageRoutingModule {}
