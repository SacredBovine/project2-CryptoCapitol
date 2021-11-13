import { TestBed } from '@angular/core/testing';

import { PastRatesService } from './past-rates.service';

describe('PastRatesService', () => {
  let service: PastRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
