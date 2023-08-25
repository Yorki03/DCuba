import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentenasPageRoutingModule } from './centenas-routing.module';

import { CentenasPage } from './centenas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentenasPageRoutingModule
  ],
  declarations: [CentenasPage]
})
export class CentenasPageModule {}
