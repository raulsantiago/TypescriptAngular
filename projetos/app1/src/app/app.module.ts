import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { TopoComponent } from './topo/topo.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { PainelComponent } from './painel/painel.component';

@NgModule({
  declarations: [
    AppComponent,
    TentativasComponent,
    TopoComponent,
    ProgressoComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
