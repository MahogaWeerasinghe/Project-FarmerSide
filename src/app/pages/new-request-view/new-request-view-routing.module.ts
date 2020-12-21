import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRequestViewPage } from './new-request-view.page';

const routes: Routes = [
  {
    path: '',
    component: NewRequestViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRequestViewPageRoutingModule {}
