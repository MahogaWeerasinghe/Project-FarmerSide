import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AihistorydetailsPage } from './aihistorydetails.page';

const routes: Routes = [
  {
    path: '',
    component: AihistorydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AihistorydetailsPageRoutingModule {}
