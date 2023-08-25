import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperacionesPage } from './operaciones.page';
import { NumerosPage } from './components/numeros/numeros.page';

const routes: Routes = [
  {
    path: '',
    component: OperacionesPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/numeros/numeros.module').then(m => m.NumerosPageModule),
      },
      {
        path: 'numeros',
        loadChildren: () => import('./components/numeros/numeros.module').then(m => m.NumerosPageModule),
      },
      {
        path: 'jugadas',
        loadChildren: () => import('./components/jugadas/jugadas.module').then( m => m.JugadasPageModule),
      },
      {
        path: 'limitados',
        loadChildren: () => import('./components/limitados/limitados.module').then( m => m.LimitadosPageModule)
      },
      {
        path: 'resumen',
        loadChildren: () => import('./components/resumen/resumen.module').then( m => m.ResumenPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperacionesPageRoutingModule {}
