import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaddyPageRoutingModule } from './paddy-routing.module';

import { PaddyPage } from './paddy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaddyPageRoutingModule
  ],
  declarations: [PaddyPage]
})
export class PaddyPageModule {}
