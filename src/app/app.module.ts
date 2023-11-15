import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'; // Added here

import { AppComponent } from './app.component';
import { CalifComponent } from './calif/calif.component';
import { CalifpredictivaComponent } from './califpredictiva/califpredictiva.component';
import { HomeComponent } from './home/home.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { SalonesComponent } from './salones/salones.component';

@NgModule({
  declarations: [
    AppComponent,
    CalifComponent,
    CalifpredictivaComponent,
    HomeComponent,
    HerramientasComponent,
    SalonesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
