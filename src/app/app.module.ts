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

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponet,
    SegundoComponeteComponent,
    MultipicaPorPipe,
    PipeCustomizavelComponent,
    TwoWayDataBindingComponent
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
