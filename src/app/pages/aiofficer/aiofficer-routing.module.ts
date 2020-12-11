import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AiofficerPage } from './aiofficer.page';

const routes: Routes = [
  {
    path: '',
    component: AiofficerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AiofficerPageRoutingModule {}
