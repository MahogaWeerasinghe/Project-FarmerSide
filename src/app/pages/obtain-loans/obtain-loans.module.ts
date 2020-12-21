import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObtainLoansPageRoutingModule } from './obtain-loans-routing.module';

import { ObtainLoansPage } from './obtain-loans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObtainLoansPageRoutingModule
  ],
  declarations: [ObtainLoansPage]
})
export class ObtainLoansPageModule {}
