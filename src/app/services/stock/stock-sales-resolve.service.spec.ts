import { TestBed } from '@angular/core/testing';

import { StockSalesResolveService } from './stock-sales-resolve.service';

describe('StockSalesResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockSalesResolveService = TestBed.get(StockSalesResolveService);
    expect(service).toBeTruthy();
  });
});
