import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrilerasParlesPageRoutingModule } from './carrileras-parles-routing.module';

import { CarrilerasParlesPage } from './carrileras-parles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrilerasParlesPageRoutingModule
  ],
  declarations: [CarrilerasParlesPage]
})
export class CarrilerasParlesPageModule {}
