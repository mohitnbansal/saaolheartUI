import { TestBed } from '@angular/core/testing';

import { DashboardPendingPaymentResolveService } from './dashboard-pending-payment-resolve.service';

describe('DashboardPendingPaymentResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardPendingPaymentResolveService = TestBed.get(DashboardPendingPaymentResolveService);
    expect(service).toBeTruthy();
  });
});
