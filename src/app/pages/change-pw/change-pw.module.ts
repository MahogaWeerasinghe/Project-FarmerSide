import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePwPageRoutingModule } from './change-pw-routing.module';

import { ChangePwPage } from './change-pw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePwPageRoutingModule
  ],
  declarations: [ChangePwPage]
})
export class ChangePwPageModule {}
