import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewaireportPageRoutingModule } from './viewaireport-routing.module';

import { ViewaireportPage } from './viewaireport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewaireportPageRoutingModule
  ],
  declarations: [ViewaireportPage]
})
export class ViewaireportPageModule {}
