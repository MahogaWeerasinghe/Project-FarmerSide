import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaddyPage } from './paddy.page';

const routes: Routes = [
  {
    path: '',
    component: PaddyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaddyPageRoutingModule {}
