import { TestBed } from '@angular/core/testing';

import { NorthwindServiceService } from './northwind-service.service';

describe('NorthwindServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NorthwindServiceService = TestBed.get(NorthwindServiceService);
    expect(service).toBeTruthy();
  });
});
