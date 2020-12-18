import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DohistorydetailsPage } from './dohistorydetails.page';

const routes: Routes = [
  {
    path: '',
    component: DohistorydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DohistorydetailsPageRoutingModule {}
