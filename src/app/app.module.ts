import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Proyecto10Module } from './proyecto10/proyecto10.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Proyecto10Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
