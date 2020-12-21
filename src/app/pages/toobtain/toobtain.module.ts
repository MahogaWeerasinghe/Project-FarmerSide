import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToobtainPageRoutingModule } from './toobtain-routing.module';

import { ToobtainPage } from './toobtain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToobtainPageRoutingModule
  ],
  declarations: [ToobtainPage]
})
export class ToobtainPageModule {}
