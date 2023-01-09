import { Component} from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
  datos = new Array;
  tarea = '';
  descripcion = '';
  
  Agregar() {
    if(this.tarea!= ''){
    this.datos.push({tarea: this.tarea, Descripcion: this.descripcion });
    this.tarea = '';
    this.descripcion = '';
  }
  }
 
}
