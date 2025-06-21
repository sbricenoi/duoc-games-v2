import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltrosComponent } from './filtros.component';

describe('FiltrosComponent', () => {
  let component: FiltrosComponent;
  let fixture: ComponentFixture<FiltrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltrosComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct number of categories', () => {
    expect(component.categorias.length).toBe(4);
  });

  it('should have the expected categories', () => {
    const expectedCategories = ['Estrategia', 'Familiares', 'Fiesta', 'Infantiles'];
    const actualCategories = component.categorias.map(cat => cat.nombre);
    
    expect(actualCategories).toEqual(expectedCategories);
  });

  it('should have valid image URLs for all categories', () => {
    component.categorias.forEach(categoria => {
      expect(categoria.imagen).toBeTruthy();
      expect(typeof categoria.imagen).toBe('string');
      expect(categoria.imagen.length).toBeGreaterThan(0);
    });
  });

  it('should emit null when "Todos" button is clicked', () => {
    spyOn(component.categoriaSeleccionada, 'emit');
    
    component.seleccionarCategoria(null);
    
    expect(component.categoriaSeleccionada.emit).toHaveBeenCalledWith(null);
  });

  it('should emit category name when a specific category is selected', () => {
    spyOn(component.categoriaSeleccionada, 'emit');
    const categoriaNombre = 'Estrategia';
    
    component.seleccionarCategoria(categoriaNombre);
    
    expect(component.categoriaSeleccionada.emit).toHaveBeenCalledWith(categoriaNombre);
  });

  it('should emit different category names correctly', () => {
    spyOn(component.categoriaSeleccionada, 'emit');
    
    // Probar cada categoría
    component.categorias.forEach(categoria => {
      component.seleccionarCategoria(categoria.nombre);
      expect(component.categoriaSeleccionada.emit).toHaveBeenCalledWith(categoria.nombre);
    });
  });

  it('should render the "Todos" button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const todosButton = compiled.querySelector('button');
    
    expect(todosButton).toBeTruthy();
    expect(todosButton?.textContent?.trim()).toBe('Todos');
  });

  it('should render all category buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    
    // Debe haber 5 botones: 1 "Todos" + 4 categorías
    expect(buttons.length).toBe(5);
  });

  it('should render category names in buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    
    // Verificar que el primer botón sea "Todos"
    expect(buttons[0].textContent?.trim()).toBe('Todos');
    
    // Verificar que los demás botones contengan los nombres de las categorías
    component.categorias.forEach((categoria, index) => {
      expect(buttons[index + 1].textContent?.trim()).toBe(categoria.nombre);
    });
  });

  it('should have correct CSS classes on buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    
    buttons.forEach(button => {
      expect(button.classList.contains('btn')).toBeTruthy();
      expect(button.classList.contains('btn-genero')).toBeTruthy();
      expect(button.classList.contains('btn-sm')).toBeTruthy();
    });
  });

  it('should call seleccionarCategoria when "Todos" button is clicked', () => {
    spyOn(component, 'seleccionarCategoria');
    const compiled = fixture.nativeElement as HTMLElement;
    const todosButton = compiled.querySelector('button') as HTMLButtonElement;
    
    todosButton.click();
    
    expect(component.seleccionarCategoria).toHaveBeenCalledWith(null);
  });

  it('should call seleccionarCategoria with correct category when category button is clicked', () => {
    spyOn(component, 'seleccionarCategoria');
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    
    // Hacer clic en el primer botón de categoría (índice 1, después de "Todos")
    const categoriaButton = buttons[1] as HTMLButtonElement;
    categoriaButton.click();
    
    expect(component.seleccionarCategoria).toHaveBeenCalledWith(component.categorias[0].nombre);
  });

  it('should emit event multiple times when different categories are selected', () => {
    spyOn(component.categoriaSeleccionada, 'emit');
    
    // Seleccionar diferentes categorías
    component.seleccionarCategoria('Estrategia');
    component.seleccionarCategoria('Familiares');
    component.seleccionarCategoria(null);
    
    expect(component.categoriaSeleccionada.emit).toHaveBeenCalledTimes(3);
    expect(component.categoriaSeleccionada.emit).toHaveBeenCalledWith('Estrategia');
    expect(component.categoriaSeleccionada.emit).toHaveBeenCalledWith('Familiares');
    expect(component.categoriaSeleccionada.emit).toHaveBeenCalledWith(null);
  });

  it('should have categoriaSeleccionada as an EventEmitter', () => {
    expect(component.categoriaSeleccionada).toBeTruthy();
    expect(typeof component.categoriaSeleccionada.emit).toBe('function');
  });

  it('should have seleccionarCategoria as a function', () => {
    expect(typeof component.seleccionarCategoria).toBe('function');
  });
});
