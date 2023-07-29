import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const newLocal = './peges/informacion/informacion.module';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./peges/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'informacion',
    loadChildren: () => import('./peges/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }