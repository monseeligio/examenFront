import { TestBed } from '@angular/core/testing';

import { ServiceInicioService } from './service-inicio.service';

describe('ServiceInicioService', () => {
  let service: ServiceInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
