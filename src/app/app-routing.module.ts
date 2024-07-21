import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartamentosComponent } from './apartamentos/apartamentos.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

export const routes: Routes = [
  { path: 'apartamentos', component: ApartamentosComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: '', redirectTo: '/apartamentos', pathMatch: 'full' } // Redirecionar para /apartamentos por padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
