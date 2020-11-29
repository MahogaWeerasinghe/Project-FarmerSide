import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgrirequestsenterPageRoutingModule } from './agrirequestsenter-routing.module';

import { AgrirequestsenterPage } from './agrirequestsenter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgrirequestsenterPageRoutingModule
  ],
  declarations: [AgrirequestsenterPage]
})
export class AgrirequestsenterPageModule {}
