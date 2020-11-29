import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgrirequestsenterPage } from './agrirequestsenter.page';

const routes: Routes = [
  {
    path: '',
    component: AgrirequestsenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgrirequestsenterPageRoutingModule {}
