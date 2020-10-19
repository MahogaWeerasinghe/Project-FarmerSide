import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnionPage } from './onion.page';

const routes: Routes = [
  {
    path: '',
    component: OnionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnionPageRoutingModule {}
