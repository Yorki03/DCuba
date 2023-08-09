import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimitadosPageRoutingModule } from './limitados-routing.module';

import { LimitadosPage } from './limitados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimitadosPageRoutingModule
  ],
  declarations: [LimitadosPage]
})
export class LimitadosPageModule {}
