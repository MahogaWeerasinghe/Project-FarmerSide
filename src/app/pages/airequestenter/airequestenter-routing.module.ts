import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirequestenterPage } from './airequestenter.page';

const routes: Routes = [
  {
    path: '',
    component: AirequestenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirequestenterPageRoutingModule {}
