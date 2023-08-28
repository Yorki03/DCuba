import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialParlesPageRoutingModule } from './historial-parles-routing.module';

import { HistorialParlesPage } from './historial-parles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialParlesPageRoutingModule
  ],
  declarations: [HistorialParlesPage]
})
export class HistorialParlesPageModule {}
