import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AihistorydetailsPageRoutingModule } from './aihistorydetails-routing.module';

import { AihistorydetailsPage } from './aihistorydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AihistorydetailsPageRoutingModule
  ],
  declarations: [AihistorydetailsPage]
})
export class AihistorydetailsPageModule {}
