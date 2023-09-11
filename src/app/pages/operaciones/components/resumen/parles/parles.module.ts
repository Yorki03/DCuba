import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParlesPageRoutingModule } from './parles-routing.module';

import { ParlesPage } from './parles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParlesPageRoutingModule
  ],
  declarations: [ParlesPage]
})
export class ParlesPageModule {}
