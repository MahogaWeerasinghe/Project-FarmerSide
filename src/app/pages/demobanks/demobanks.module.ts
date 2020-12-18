import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemobanksPageRoutingModule } from './demobanks-routing.module';

import { DemobanksPage } from './demobanks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemobanksPageRoutingModule
  ],
  declarations: [DemobanksPage]
})
export class DemobanksPageModule {}
