import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgrihistoryPage } from './agrihistory.page';

const routes: Routes = [
  {
    path: '',
    component: AgrihistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgrihistoryPageRoutingModule {}
