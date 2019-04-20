import { TestBed } from '@angular/core/testing';

import { CustomerListResolveService } from './customer-list-resolve.service';

describe('CustomerListResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerListResolveService = TestBed.get(CustomerListResolveService);
    expect(service).toBeTruthy();
  });
});
