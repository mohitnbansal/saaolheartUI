import { TestBed } from '@angular/core/testing';

import { DashboardNewjoineeResolveService } from './dashboard-newjoinee-resolve.service';

describe('DashboardNewjoineeResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardNewjoineeResolveService = TestBed.get(DashboardNewjoineeResolveService);
    expect(service).toBeTruthy();
  });
});
