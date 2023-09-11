import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialTotalPage } from './historial-total.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialTotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialTotalPageRoutingModule {}
