import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremioCentenaPage } from './premio-centena.page';

const routes: Routes = [
  {
    path: '',
    component: PremioCentenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremioCentenaPageRoutingModule {}
