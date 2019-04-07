import { TestBed } from '@angular/core/testing';

import { SalesListResolveService } from './sales-list-resolve.service';

describe('SalesListResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesListResolveService = TestBed.get(SalesListResolveService);
    expect(service).toBeTruthy();
  });
});
