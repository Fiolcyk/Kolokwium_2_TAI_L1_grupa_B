import { TestBed } from '@angular/core/testing';

import { DFDataService } from './df-data.service';

describe('DFDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DFDataService = TestBed.get(DFDataService);
    expect(service).toBeTruthy();
  });
});
