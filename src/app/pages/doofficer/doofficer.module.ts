import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoofficerPageRoutingModule } from './doofficer-routing.module';

import { DoofficerPage } from './doofficer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoofficerPageRoutingModule
  ],
  declarations: [DoofficerPage]
})
export class DoofficerPageModule {}
