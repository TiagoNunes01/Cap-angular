import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponet } from './primeiro-componete/primeiro-componet';
import { SegundoComponeteComponent } from './segundo-componete/segundo-componete.component';
import { MultipicaPorPipe } from './multipica-por.pipe';
import { PipeCustomizavelComponent } from './pipe-customizavel/pipe-customizavel.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { CoponentePersonalizadoComponent } from './coponente-personalizado/coponente-personalizado.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ExemploServicos1Component } from './exemplo-servicos1/exemplo-servicos1.component';
import { ExemploServicos2Component } from './exemplo-servicos2/exemplo-servicos2.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponet,
    SegundoComponeteComponent,
    MultipicaPorPipe,
    PipeCustomizavelComponent,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    CoponentePersonalizadoComponent,
    ComponenteFilhoComponent,
    ComponentePaiComponent,
    ExemploServicos1Component,
    ExemploServicos2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
