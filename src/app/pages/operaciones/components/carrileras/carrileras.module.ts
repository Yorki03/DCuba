import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrilerasPageRoutingModule } from './carrileras-routing.module';

import { CarrilerasPage } from './carrileras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrilerasPageRoutingModule
  ],
  declarations: [CarrilerasPage]
})
export class CarrilerasPageModule {}
