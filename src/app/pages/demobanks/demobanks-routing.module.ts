import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemobanksPage } from './demobanks.page';

const routes: Routes = [
  {
    path: '',
    component: DemobanksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemobanksPageRoutingModule {}
