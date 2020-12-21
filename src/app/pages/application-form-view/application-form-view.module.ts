import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationFormViewPageRoutingModule } from './application-form-view-routing.module';

import { ApplicationFormViewPage } from './application-form-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationFormViewPageRoutingModule
  ],
  declarations: [ApplicationFormViewPage]
})
export class ApplicationFormViewPageModule {}
