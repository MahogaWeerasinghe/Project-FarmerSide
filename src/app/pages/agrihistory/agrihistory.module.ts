import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgrihistoryPageRoutingModule } from './agrihistory-routing.module';

import { AgrihistoryPage } from './agrihistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgrihistoryPageRoutingModule
  ],
  declarations: [AgrihistoryPage]
})
export class AgrihistoryPageModule {}
