import { TestBed } from '@angular/core/testing';

import { SalesDetailsResolveService } from './sales-details-resolve.service';

describe('SalesDetailsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesDetailsResolveService = TestBed.get(SalesDetailsResolveService);
    expect(service).toBeTruthy();
  });
});
