import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirequestPage } from './airequest.page';

const routes: Routes = [
  {
    path: '',
    component: AirequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirequestPageRoutingModule {}
