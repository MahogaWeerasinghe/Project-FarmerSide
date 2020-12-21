import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalDetailsViewPage } from './personal-details-view.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalDetailsViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalDetailsViewPageRoutingModule {}
