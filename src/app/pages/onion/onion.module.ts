import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnionPageRoutingModule } from './onion-routing.module';

import { OnionPage } from './onion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnionPageRoutingModule
  ],
  declarations: [OnionPage]
})
export class OnionPageModule {}
