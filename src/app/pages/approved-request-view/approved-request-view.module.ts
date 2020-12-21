import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovedRequestViewPageRoutingModule } from './approved-request-view-routing.module';

import { ApprovedRequestViewPage } from './approved-request-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovedRequestViewPageRoutingModule
  ],
  declarations: [ApprovedRequestViewPage]
})
export class ApprovedRequestViewPageModule {}
