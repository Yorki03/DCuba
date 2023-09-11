import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialCentenaPage } from './historial-centena.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialCentenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialCentenaPageRoutingModule {}
