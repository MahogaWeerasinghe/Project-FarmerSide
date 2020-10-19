import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerProfilePageRoutingModule } from './farmer-profile-routing.module';

import { FarmerProfilePage } from './farmer-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerProfilePageRoutingModule
  ],
  declarations: [FarmerProfilePage]
})
export class FarmerProfilePageModule {}

