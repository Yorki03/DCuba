import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimitadosPage } from './limitados.page';

const routes: Routes = [
  {
    path: '',
    component: LimitadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimitadosPageRoutingModule {}
