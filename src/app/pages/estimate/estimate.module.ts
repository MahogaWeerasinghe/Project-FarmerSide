import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimatePageRoutingModule } from './estimate-routing.module';

import { EstimatePage } from './estimate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstimatePageRoutingModule
  ],
  declarations: [EstimatePage]
})
export class EstimatePageModule {}
