import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgrirequestsPageRoutingModule } from './agrirequests-routing.module';

import { AgrirequestsPage } from './agrirequests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgrirequestsPageRoutingModule
  ],
  declarations: [AgrirequestsPage]
})
export class AgrirequestsPageModule {}
