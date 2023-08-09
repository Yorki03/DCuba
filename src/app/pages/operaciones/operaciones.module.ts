import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperacionesPageRoutingModule } from './operaciones-routing.module';

import { OperacionesPage } from './operaciones.page';
import { JugadasPage } from './components/jugadas/jugadas.page';
import { LimitadosPage } from './components/limitados/limitados.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperacionesPageRoutingModule
  ],
  declarations: [
    OperacionesPage,
    JugadasPage, 
    LimitadosPage
  ]
})
export class OperacionesPageModule {}