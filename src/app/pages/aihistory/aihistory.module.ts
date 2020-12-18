import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AihistoryPageRoutingModule } from './aihistory-routing.module';

import { AihistoryPage } from './aihistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AihistoryPageRoutingModule
  ],
  declarations: [AihistoryPage]
})
export class AihistoryPageModule {}
