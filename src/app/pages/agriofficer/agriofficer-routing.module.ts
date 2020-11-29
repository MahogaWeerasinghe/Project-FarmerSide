import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgriofficerPage } from './agriofficer.page';

const routes: Routes = [
  {
    path: '',
    component: AgriofficerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgriofficerPageRoutingModule {}
