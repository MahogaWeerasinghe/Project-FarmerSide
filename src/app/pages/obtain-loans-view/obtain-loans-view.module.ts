import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObtainLoansViewPageRoutingModule } from './obtain-loans-view-routing.module';

import { ObtainLoansViewPage } from './obtain-loans-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObtainLoansViewPageRoutingModule
  ],
  declarations: [ObtainLoansViewPage]
})
export class ObtainLoansViewPageModule {}
