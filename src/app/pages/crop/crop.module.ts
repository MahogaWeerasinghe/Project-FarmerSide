import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropPageRoutingModule } from './crop-routing.module';

import { CropPage } from './crop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropPageRoutingModule
  ],
  declarations: [CropPage]
})
export class CropPageModule {}
