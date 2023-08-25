import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentenasPage } from './centenas.page';

const routes: Routes = [
  {
    path: '',
    component: CentenasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentenasPageRoutingModule {}
