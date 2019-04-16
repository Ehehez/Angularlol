import { TestBed } from '@angular/core/testing';

import { UserempService } from './useremp.service';

describe('UserempService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserempService = TestBed.get(UserempService);
    expect(service).toBeTruthy();
  });
});
