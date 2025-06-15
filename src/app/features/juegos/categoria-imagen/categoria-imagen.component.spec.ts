import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaImagenComponent } from './categoria-imagen.component';

describe('CategoriaImagenComponent', () => {
  let component: CategoriaImagenComponent;
  let fixture: ComponentFixture<CategoriaImagenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaImagenComponent]
    });
    fixture = TestBed.createComponent(CategoriaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
