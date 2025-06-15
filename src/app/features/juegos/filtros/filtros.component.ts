import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent {
  categorias = [
    { nombre: 'Estrategia', imagen: 'https://cdn.ligadegamers.com/imagenes/age-of-empires-ii-definitive-edition-0-cke.jpg' },
    { nombre: 'Familiares', imagen: 'https://img.europapress.es/fotoweb/fotonoticia_20160309110619_1200_v2.jpg' },
    { nombre: 'Fiesta', imagen: 'https://cuponassets.cuponatic-latam.com/backendPe/uploads/imagenes_descuentos/111056/9ef6bbbdcd12ea3b22c5a9d3c85f40a21db87756.XL2.jpg' },
    { nombre: 'Infantiles', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWWW0Di8W-V-WBnwEQyV2NaOT7xuZNP2D8A&s' }
  ];

  @Output() categoriaSeleccionada = new EventEmitter<string | null>();

  seleccionarCategoria(nombre: string | null) {
    this.categoriaSeleccionada.emit(nombre);
  }
}
