import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConveterMoedasComponent } from './template/conveter-moedas/conveter-moedas.component';
import { ListarSimbolosComponent } from './template/listar-simbolos/listar-simbolos.component';
import { PrincipalComponent } from './template/principal/principal.component';
import { RealDolarComponent } from './template/real-dolar/real-dolar.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'listar-simbolos', component: ListarSimbolosComponent},
  {path: 'real-dolar', component: RealDolarComponent},
  {path: 'conveter-moedas', component: ConveterMoedasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
