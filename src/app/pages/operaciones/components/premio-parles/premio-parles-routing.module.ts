import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremioParlesPage } from './premio-parles.page';

const routes: Routes = [
  {
    path: '',
    component: PremioParlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremioParlesPageRoutingModule {}
