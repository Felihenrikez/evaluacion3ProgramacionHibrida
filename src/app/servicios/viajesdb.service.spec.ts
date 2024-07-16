import { TestBed } from '@angular/core/testing';

import { ViajesdbService } from './viajesdb.service';

describe('ViajesdbService', () => {
  let service: ViajesdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajesdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
