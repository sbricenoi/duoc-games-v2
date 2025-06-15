import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from '../../shared/models/juego.model';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  private readonly API_BASE = 'https://www.freetogame.com/api';

  constructor(private http: HttpClient) {}

  obtenerJuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(`${this.API_BASE}/games`);
  }
} 