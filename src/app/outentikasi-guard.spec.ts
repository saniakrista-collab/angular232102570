import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { outentikasiGuard } from './outentikasi-guard';

describe('outentikasiGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => outentikasiGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
