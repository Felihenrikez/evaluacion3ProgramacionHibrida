import { TestBed } from '@angular/core/testing';

import { SqliteServicioService } from './sqlite-servicio.service';

describe('SqliteServicioService', () => {
  let service: SqliteServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqliteServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
