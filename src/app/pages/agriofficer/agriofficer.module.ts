import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgriofficerPageRoutingModule } from './agriofficer-routing.module';

import { AgriofficerPage } from './agriofficer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgriofficerPageRoutingModule
  ],
  declarations: [AgriofficerPage]
})
export class AgriofficerPageModule {}
