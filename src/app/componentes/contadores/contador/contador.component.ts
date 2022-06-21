import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  public titulo  : string = 'Contador App';
  public contador: number = 0;
  public base    : number = 5;

  cambiarContador( valor: number): void {
    this.contador+=valor;
  }
}
