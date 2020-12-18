import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgrihistorydetailsPage } from './agrihistorydetails.page';

const routes: Routes = [
  {
    path: '',
    component: AgrihistorydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgrihistorydetailsPageRoutingModule {}
