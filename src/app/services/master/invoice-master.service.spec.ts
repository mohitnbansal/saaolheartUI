import { TestBed } from '@angular/core/testing';

import { InvoiceMasterService } from './invoice-master.service';

describe('InvoiceMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceMasterService = TestBed.get(InvoiceMasterService);
    expect(service).toBeTruthy();
  });
});
