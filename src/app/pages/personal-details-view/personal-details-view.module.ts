import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalDetailsViewPageRoutingModule } from './personal-details-view-routing.module';

import { PersonalDetailsViewPage } from './personal-details-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalDetailsViewPageRoutingModule
  ],
  declarations: [PersonalDetailsViewPage]
})
export class PersonalDetailsViewPageModule {}
