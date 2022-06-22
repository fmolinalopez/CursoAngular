import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html'
})
export class AgregarPersonajeComponent {
  
  constructor( private dbzService: DbzService ){}
  
  @Input() nuevo: Personaje = {nombre: '', poder: 0};

  agregar(): void {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);

    this.inicializarNuevo();
  }

  inicializarNuevo(): void {
    this.nuevo = {nombre: '', poder:0};
  }

}
