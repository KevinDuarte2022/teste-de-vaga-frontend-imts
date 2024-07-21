// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { ApartamentosComponent } from './apartamentos/apartamentos.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    ApartamentosComponent,
    VeiculosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
