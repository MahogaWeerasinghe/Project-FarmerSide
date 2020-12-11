import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficersPageRoutingModule } from './officers-routing.module';

import { OfficersPage } from './officers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficersPageRoutingModule
  ],
  declarations: [OfficersPage]
})
export class OfficersPageModule {}
