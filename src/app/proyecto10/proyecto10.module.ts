import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Componente1Component,
    Componente2Component,
    Componente3Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Componente1Component,
    Componente2Component,
    Componente3Component
  ]
})
export class Proyecto10Module { }
