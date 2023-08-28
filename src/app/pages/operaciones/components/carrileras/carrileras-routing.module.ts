import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrilerasPage } from './carrileras.page';

const routes: Routes = [
  {
    path: '',
    component: CarrilerasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrilerasPageRoutingModule {}
