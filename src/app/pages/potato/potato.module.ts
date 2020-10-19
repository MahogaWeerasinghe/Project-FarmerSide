import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PotatoPageRoutingModule } from './potato-routing.module';

import { PotatoPage } from './potato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PotatoPageRoutingModule
  ],
  declarations: [PotatoPage]
})
export class PotatoPageModule {}
