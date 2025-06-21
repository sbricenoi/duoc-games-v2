import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FiltrosComponent } from './features/juegos/filtros/filtros.component';
import { CategoriaImagenComponent } from './features/juegos/categoria-imagen/categoria-imagen.component';
import { JuegosListComponent } from './features/juegos/juegos-list/juegos-list.component';
import { RegistroComponent } from './features/registro/registro.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
    declarations: [
      AppComponent,
      FiltrosComponent,
      CategoriaImagenComponent,
      JuegosListComponent,
      RegistroComponent
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'duoc-games'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('duoc-games');
  });

  it('should render the navbar brand', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.navbar-brand')?.textContent).toContain('Duoc-Games');
  });

  it('should render the registration button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.btn-ludoteca')?.textContent).toContain('Registrarse');
  });
});
