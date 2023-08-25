import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenPage } from './resumen.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenPage,
  },
  {
    path: 'jugadas',
    loadChildren: () => import('./jugadas/jugadas.module').then( m => m.JugadasPageModule)
  },
  {
    path: 'parles',
    loadChildren: () => import('./parles/parles.module').then( m => m.ParlesPageModule)
  },
  {
    path: 'centenas',
    loadChildren: () => import('./centenas/centenas.module').then( m => m.CentenasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenPageRoutingModule {}
