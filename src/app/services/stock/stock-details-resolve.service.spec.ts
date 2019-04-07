import { TestBed } from '@angular/core/testing';

import { StockDetailsResolveService } from './stock-details-resolve.service';

describe('StockDetailsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockDetailsResolveService = TestBed.get(StockDetailsResolveService);
    expect(service).toBeTruthy();
  });
});
