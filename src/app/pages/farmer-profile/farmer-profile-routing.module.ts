import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmerProfilePage } from './farmer-profile.page';

const routes: Routes = [
  {
    path: '',
    component: FarmerProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerProfilePageRoutingModule {}
