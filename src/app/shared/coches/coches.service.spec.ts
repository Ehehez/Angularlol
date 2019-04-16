import { TestBed } from '@angular/core/testing';

import { CochesService } from './coches.service';

describe('CochesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CochesService = TestBed.get(CochesService);
    expect(service).toBeTruthy();
  });
});
