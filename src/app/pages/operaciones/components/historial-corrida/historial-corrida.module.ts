import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialCorridaPageRoutingModule } from './historial-corrida-routing.module';

import { HistorialCorridaPage } from './historial-corrida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialCorridaPageRoutingModule
  ],
  declarations: [HistorialCorridaPage]
})
export class HistorialCorridaPageModule {}
