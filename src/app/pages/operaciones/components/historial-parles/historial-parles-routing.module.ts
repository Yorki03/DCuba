import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialParlesPage } from './historial-parles.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialParlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialParlesPageRoutingModule {}
