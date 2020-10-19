import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObtainedLoansPageRoutingModule } from './obtained-loans-routing.module';

import { ObtainedLoansPage } from './obtained-loans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObtainedLoansPageRoutingModule
  ],
  declarations: [ObtainedLoansPage]
})
export class ObtainedLoansPageModule {}
