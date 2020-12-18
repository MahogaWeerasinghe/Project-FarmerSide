import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AihistoryPage } from './aihistory.page';

const routes: Routes = [
  {
    path: '',
    component: AihistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AihistoryPageRoutingModule {}
