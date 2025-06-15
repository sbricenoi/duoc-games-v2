import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltrosComponent } from './features/juegos/filtros/filtros.component';
import { CategoriaImagenComponent } from './features/juegos/categoria-imagen/categoria-imagen.component';
import { JuegosListComponent } from './features/juegos/juegos-list/juegos-list.component';
import { RegistroComponent } from './features/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltrosComponent,
    CategoriaImagenComponent,
    JuegosListComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 