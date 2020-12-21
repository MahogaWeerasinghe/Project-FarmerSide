import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRequestViewPageRoutingModule } from './new-request-view-routing.module';

import { NewRequestViewPage } from './new-request-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRequestViewPageRoutingModule
  ],
  declarations: [NewRequestViewPage]
})
export class NewRequestViewPageModule {}
