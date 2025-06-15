import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-categoria-imagen',
  templateUrl: './categoria-imagen.component.html',
  styleUrls: ['./categoria-imagen.component.css']
})
export class CategoriaImagenComponent {
  @Input() nombreCategoria: string | null = null;

  categorias = [
    { nombre: 'Estrategia', imagen: 'https://cdn.ligadegamers.com/imagenes/age-of-empires-ii-definitive-edition-0-cke.jpg' },
    { nombre: 'Familiares', imagen: 'https://img.europapress.es/fotoweb/fotonoticia_20160309110619_1200_v2.jpg' },
    { nombre: 'Fiesta', imagen: 'https://cuponassets.cuponatic-latam.com/backendPe/uploads/imagenes_descuentos/111056/9ef6bbbdcd12ea3b22c5a9d3c85f40a21db87756.XL2.jpg' },
    { nombre: 'Infantiles', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWWW0Di8W-V-WBnwEQyV2NaOT7xuZNP2D8A&s' }
  ];

  get imagenCategoria(): string | null {
    const cat = this.categorias.find(c => c.nombre === this.nombreCategoria);
    return cat ? cat.imagen : null;
  }
}
