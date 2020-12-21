import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankloandetailsPage } from './bankloandetails.page';

const routes: Routes = [
  {
    path: '',
    component: BankloandetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankloandetailsPageRoutingModule {}
