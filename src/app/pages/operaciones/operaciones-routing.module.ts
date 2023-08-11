import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperacionesPage } from './operaciones.page';

const routes: Routes = [
  {
    path: '',
    component: OperacionesPage,
    children: [
      {
        path: 'operaciones',
        loadChildren: () => import('./operaciones.module').then(m => m.OperacionesPageModule),
      },
      {
        path: 'jugadas',
        loadChildren: () => import('./components/jugadas/jugadas.module').then( m => m.JugadasPageModule),
      },
      {
        path: 'limitados',
        loadChildren: () => import('./components/limitados/limitados.module').then( m => m.LimitadosPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperacionesPageRoutingModule {}
