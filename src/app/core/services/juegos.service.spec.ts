import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { JuegosService } from './juegos.service';

describe('JuegosService', () => {
  let service: JuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(JuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
