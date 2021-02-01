import { TestBed } from '@angular/core/testing';

import { FilterTextService } from './filter-text.service';

describe('FilterTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterTextService = TestBed.get(FilterTextService);
    expect(service).toBeTruthy();
  });
});
