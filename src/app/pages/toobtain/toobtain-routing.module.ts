import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToobtainPage } from './toobtain.page';

const routes: Routes = [
  {
    path: '',
    component: ToobtainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToobtainPageRoutingModule {}
