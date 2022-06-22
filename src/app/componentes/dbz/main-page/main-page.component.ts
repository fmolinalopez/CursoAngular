import { Component, OnInit, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor( ) {}

  nuevo: Personaje = {nombre: '', poder: 0};
}
