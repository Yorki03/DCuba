import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParlesPage } from './parles.page';

const routes: Routes = [
  {
    path: '',
    component: ParlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParlesPageRoutingModule {}
