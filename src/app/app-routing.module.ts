import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const newLocal = './peges/informacion/informacion.module';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./auth/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'jugadas',
    loadChildren: () => import('./pages/jugadas/jugadas.module').then( m => m.JugadasPageModule)
  },
  {
    path: 'limitados',
    loadChildren: () => import('./pages/limitados/limitados.module').then( m => m.LimitadosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
