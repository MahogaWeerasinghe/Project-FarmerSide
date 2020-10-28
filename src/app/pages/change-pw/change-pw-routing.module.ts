import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePwPage } from './change-pw.page';

const routes: Routes = [
  {
    path: '',
    component: ChangePwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePwPageRoutingModule {}
