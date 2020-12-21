import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRequestsPageRoutingModule } from './new-requests-routing.module';

import { NewRequestsPage } from './new-requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRequestsPageRoutingModule
  ],
  declarations: [NewRequestsPage]
})
export class NewRequestsPageModule {}
