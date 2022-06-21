import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Iron man', 'Spider man', 'Thor', 'Hulk'];
    heroesBorrados: string[] = [];

    public hayHeroesBorrados(): boolean {
      return this.heroesBorrados.length > 0;
    }

    public borrarHeroe(): void {
      const heroeBorrado: string = this.heroes.shift() || "";
      if (heroeBorrado !== "") {
        this.heroesBorrados.push(heroeBorrado);
      }
    }
}
