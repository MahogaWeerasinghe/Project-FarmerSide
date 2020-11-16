import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GmapPage } from './gmap.page';

const routes: Routes = [
  {
    path: '',
    component: GmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GmapPageRoutingModule {}
