import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatedetailsPage } from './updatedetails.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatedetailsPageRoutingModule {}
