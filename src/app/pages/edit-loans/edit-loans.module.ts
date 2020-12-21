import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLoansPageRoutingModule } from './edit-loans-routing.module';

import { EditLoansPage } from './edit-loans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditLoansPageRoutingModule
  ],
  declarations: [EditLoansPage]
})
export class EditLoansPageModule {}
