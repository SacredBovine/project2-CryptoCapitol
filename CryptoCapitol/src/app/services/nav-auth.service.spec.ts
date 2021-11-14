import { TestBed } from '@angular/core/testing';

import { NavAuthService } from './nav-auth.service';

describe('NavAuthService', () => {
  let service: NavAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
