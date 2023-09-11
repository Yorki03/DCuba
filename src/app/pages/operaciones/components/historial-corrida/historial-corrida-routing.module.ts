import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialCorridaPage } from './historial-corrida.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialCorridaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialCorridaPageRoutingModule {}
