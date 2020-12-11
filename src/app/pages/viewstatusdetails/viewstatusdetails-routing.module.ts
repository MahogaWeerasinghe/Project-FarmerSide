import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewstatusdetailsPage } from './viewstatusdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ViewstatusdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewstatusdetailsPageRoutingModule {}
