import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationFormViewPage } from './application-form-view.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationFormViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationFormViewPageRoutingModule {}
