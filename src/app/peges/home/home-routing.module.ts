import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { InformacionPage } from '../informacion/informacion.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'informacion',
    component: InformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
