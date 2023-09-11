import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremioCentenaPageRoutingModule } from './premio-centena-routing.module';

import { PremioCentenaPage } from './premio-centena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremioCentenaPageRoutingModule
  ],
  declarations: [PremioCentenaPage]
})
export class PremioCentenaPageModule {}
