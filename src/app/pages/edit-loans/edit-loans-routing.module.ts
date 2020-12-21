import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLoansPage } from './edit-loans.page';

const routes: Routes = [
  {
    path: '',
    component: EditLoansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLoansPageRoutingModule {}
