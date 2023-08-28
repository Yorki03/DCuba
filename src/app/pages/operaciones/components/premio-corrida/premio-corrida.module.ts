import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremioCorridaPageRoutingModule } from './premio-corrida-routing.module';

import { PremioCorridaPage } from './premio-corrida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremioCorridaPageRoutingModule
  ],
  declarations: [PremioCorridaPage]
})
export class PremioCorridaPageModule {}
