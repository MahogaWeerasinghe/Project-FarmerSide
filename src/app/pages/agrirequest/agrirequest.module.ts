import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgrirequestPageRoutingModule } from './agrirequest-routing.module';

import { AgrirequestPage } from './agrirequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgrirequestPageRoutingModule
  ],
  declarations: [AgrirequestPage]
})
export class AgrirequestPageModule {}
