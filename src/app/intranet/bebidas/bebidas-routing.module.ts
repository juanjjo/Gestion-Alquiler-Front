import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BebidasComponent } from './bebidas.component';

const routes: Routes = [
  {
    path: '',
    component: BebidasComponent,
    data: {
      title: 'bebidas'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BebidasRoutingModule {};
