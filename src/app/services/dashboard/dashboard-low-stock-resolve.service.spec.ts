import { TestBed } from '@angular/core/testing';

import { DashboardLowStockResolveService } from './dashboard-low-stock-resolve.service';

describe('DashboardLowStockResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardLowStockResolveService = TestBed.get(DashboardLowStockResolveService);
    expect(service).toBeTruthy();
  });
});
