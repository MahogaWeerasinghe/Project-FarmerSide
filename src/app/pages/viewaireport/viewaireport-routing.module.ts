import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewaireportPage } from './viewaireport.page';

const routes: Routes = [
  {
    path: '',
    component: ViewaireportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewaireportPageRoutingModule {}
