// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { ApartamentosComponent } from './apartamentos/apartamentos.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { ApartamentosService } from './apartamentos.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VeiculosService } from './veiculos.service';

@NgModule({
  declarations: [
    AppComponent,
    ApartamentosComponent,
    VeiculosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ApartamentosService,
    VeiculosService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
