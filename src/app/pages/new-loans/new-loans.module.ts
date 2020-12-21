import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLoansPageRoutingModule } from './new-loans-routing.module';

import { NewLoansPage } from './new-loans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLoansPageRoutingModule
  ],
  declarations: [NewLoansPage]
})
export class NewLoansPageModule {}
