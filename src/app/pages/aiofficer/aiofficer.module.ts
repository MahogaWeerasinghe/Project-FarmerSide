import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AiofficerPageRoutingModule } from './aiofficer-routing.module';

import { AiofficerPage } from './aiofficer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AiofficerPageRoutingModule
  ],
  declarations: [AiofficerPage]
})
export class AiofficerPageModule {}
