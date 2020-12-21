import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRequestsPage } from './new-requests.page';

const routes: Routes = [
  {
    path: '',
    component: NewRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRequestsPageRoutingModule {}
