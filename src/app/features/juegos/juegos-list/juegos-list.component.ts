import { Component, Input, OnChanges } from '@angular/core';
import { Juego } from '../../../shared/models/juego.model';

@Component({
  standalone: false,
  selector: 'app-juegos-list',
  templateUrl: './juegos-list.component.html',
  styleUrls: ['./juegos-list.component.css']
})
export class JuegosListComponent implements OnChanges {
  @Input() juegos: Juego[] = [];
  @Input() juegosPorCarga = 3;

  juegosMostrados: Juego[] = [];
  private cantidadMostrada = 0;

  ngOnChanges() {
    this.cantidadMostrada = 0;
    this.cargarMas();
  }

  cargarMas() {
    const siguiente = this.cantidadMostrada + this.juegosPorCarga;
    this.juegosMostrados = this.juegos.slice(0, siguiente);
    this.cantidadMostrada = this.juegosMostrados.length;
  }
}
