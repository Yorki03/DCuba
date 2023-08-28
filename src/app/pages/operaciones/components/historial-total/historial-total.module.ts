import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialTotalPageRoutingModule } from './historial-total-routing.module';

import { HistorialTotalPage } from './historial-total.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialTotalPageRoutingModule
  ],
  declarations: [HistorialTotalPage]
})
export class HistorialTotalPageModule {}
