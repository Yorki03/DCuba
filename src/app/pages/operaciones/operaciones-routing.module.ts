import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperacionesPage } from './operaciones.page';


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
        path: 'historial',
        loadChildren: () => import('./components/historial/historial.module').then( m => m.HistorialPageModule)
      },
      {
        path: 'premios',
        loadChildren: () => import('./components/premios/premios.module').then( m => m.PremiosPageModule)
      },
      {
        path: 'carrileras',
        loadChildren: () => import('./components/carrileras/carrileras.module').then( m => m.CarrilerasPageModule)
      },
      {
        path: 'carrileras-parles',
        loadChildren: () => import('./components/carrileras-parles/carrileras-parles.module').then( m => m.CarrilerasParlesPageModule)
      },
      {
        path: 'historial-parles',
        loadChildren: () => import('./components/historial-parles/historial-parles.module').then( m => m.HistorialParlesPageModule)
      },
      {
        path: 'historial-centena',
        loadChildren: () => import('./components/historial-centena/historial-centena.module').then( m => m.HistorialCentenaPageModule)
      },
      {
        path: 'premio-centena',
        loadChildren: () => import('./components/premio-centena/premio-centena.module').then( m => m.PremioCentenaPageModule)
      },
      {
        path: 'premio-parles',
        loadChildren: () => import('./components/premio-parles/premio-parles.module').then( m => m.PremioParlesPageModule)
      },
      {
        path: 'premio-corrida',
        loadChildren: () => import('./components/premio-corrida/premio-corrida.module').then( m => m.PremioCorridaPageModule)
      },
      {
        path: 'historial-corrida',
        loadChildren: () => import('./components/historial-corrida/historial-corrida.module').then( m => m.HistorialCorridaPageModule)
      },
    ]
  },
  
  

  

  

  

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperacionesPageRoutingModule {}
