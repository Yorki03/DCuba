import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremioCorridaPage } from './premio-corrida.page';

const routes: Routes = [
  {
    path: '',
    component: PremioCorridaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremioCorridaPageRoutingModule {}
