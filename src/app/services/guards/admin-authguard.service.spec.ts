import { TestBed } from '@angular/core/testing';

import { AdminAuthguardService } from './admin-authguard.service';

describe('AdminAuthguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAuthguardService = TestBed.get(AdminAuthguardService);
    expect(service).toBeTruthy();
  });
});
