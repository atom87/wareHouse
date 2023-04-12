import { TestBed } from '@angular/core/testing';

import { WHouseService } from './w-house.service';

describe('WHouseService', () => {
  let service: WHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
