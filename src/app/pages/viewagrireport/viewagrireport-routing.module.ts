import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewagrireportPage } from './viewagrireport.page';

const routes: Routes = [
  {
    path: '',
    component: ViewagrireportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewagrireportPageRoutingModule {}
