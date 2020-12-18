import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimatePage } from './estimate.page';

const routes: Routes = [
  {
    path: '',
    component: EstimatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstimatePageRoutingModule {}
