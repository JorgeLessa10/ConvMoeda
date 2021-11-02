import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopoComponent } from './template/topo/topo.component';
import { PrincipalComponent } from './template/principal/principal.component';
import { ConveterMoedasComponent } from './template/conveter-moedas/conveter-moedas.component';
import { RealDolarComponent } from './template/real-dolar/real-dolar.component';
import { ListarSimbolosComponent } from './template/listar-simbolos/listar-simbolos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PrincipalComponent,
    ConveterMoedasComponent,
    RealDolarComponent,
    ListarSimbolosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent, TopoComponent]
})
export class AppModule { }
