import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgrirequestPage } from './agrirequest.page';

const routes: Routes = [
  {
    path: '',
    component: AgrirequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgrirequestPageRoutingModule {}
