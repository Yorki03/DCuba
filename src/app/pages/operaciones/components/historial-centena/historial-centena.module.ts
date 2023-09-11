import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialCentenaPageRoutingModule } from './historial-centena-routing.module';

import { HistorialCentenaPage } from './historial-centena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialCentenaPageRoutingModule
  ],
  declarations: [HistorialCentenaPage]
})
export class HistorialCentenaPageModule {}
