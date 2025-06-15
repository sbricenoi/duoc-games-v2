import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { JuegosService } from './core/services/juegos.service';
import { Juego } from './shared/models/juego.model';
import { RegistroComponent } from './features/registro/registro.component';

declare var bootstrap: any;

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'duoc-games';
  juegos: Juego[] = [];
  juegosFiltrados: Juego[] = [];
  categoriaSeleccionada: string | null = null;
  cargando = true;

  @ViewChild(RegistroComponent) registroComponent!: RegistroComponent;

  // Mapa de asociación entre categorías locales y géneros de la API
  categoriaGeneroMap: { [key: string]: string[] } = {
    'Estrategia': ['Strategy', 'fantasy', 'mmorpg', 'battle-royale'],
    'Familiares': ['racing'],
    'Fiesta': ['sports'],
    'Infantiles': ['anime', 'social', 'sports']
  };

  constructor(private juegosService: JuegosService) {}

  ngOnInit() {
    this.juegosService.obtenerJuegos().subscribe(data => {
      this.juegos = data;
      this.filtrarJuegos();
      this.cargando = false;
    });
  }

  ngAfterViewInit() {
    const modal = document.getElementById('modalRegistro');
    if (modal) {
      modal.addEventListener('hidden.bs.modal', () => {
        if (this.registroComponent) {
          this.registroComponent.limpiarFormulario();
        }
      });
    }
  }

  onCategoriaSeleccionada(categoria: string | null) {
    this.categoriaSeleccionada = categoria;
    this.filtrarJuegos();
  }

  filtrarJuegos() {
    if (!this.categoriaSeleccionada) {
      this.juegosFiltrados = this.juegos;
    } else {
      const generos = this.categoriaGeneroMap[this.categoriaSeleccionada] || [];
      this.juegosFiltrados = this.juegos.filter(j => generos.some(g => j.genre && j.genre.toLowerCase().includes(g.toLowerCase())));
    }
  }
}
