import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremioParlesPageRoutingModule } from './premio-parles-routing.module';

import { PremioParlesPage } from './premio-parles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremioParlesPageRoutingModule
  ],
  declarations: [PremioParlesPage]
})
export class PremioParlesPageModule {}
