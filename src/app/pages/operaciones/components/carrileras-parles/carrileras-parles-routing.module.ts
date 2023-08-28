import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrilerasParlesPage } from './carrileras-parles.page';

const routes: Routes = [
  {
    path: '',
    component: CarrilerasParlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrilerasParlesPageRoutingModule {}
