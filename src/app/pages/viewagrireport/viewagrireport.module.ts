import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewagrireportPageRoutingModule } from './viewagrireport-routing.module';

import { ViewagrireportPage } from './viewagrireport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewagrireportPageRoutingModule
  ],
  declarations: [ViewagrireportPage]
})
export class ViewagrireportPageModule {}
