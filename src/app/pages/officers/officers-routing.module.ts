import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficersPage } from './officers.page';

const routes: Routes = [
  {
    path: '',
    component: OfficersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficersPageRoutingModule {}
