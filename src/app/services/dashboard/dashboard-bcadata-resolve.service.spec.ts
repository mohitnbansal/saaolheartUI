import { TestBed } from '@angular/core/testing';

import { DashboardBCADataResolveService } from './dashboard-bcadata-resolve.service';

describe('DashboardBCADataResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardBCADataResolveService = TestBed.get(DashboardBCADataResolveService);
    expect(service).toBeTruthy();
  });
});
