import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgrirequestsPage } from './agrirequests.page';

const routes: Routes = [
  {
    path: '',
    component: AgrirequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgrirequestsPageRoutingModule {}
