import { TestBed } from '@angular/core/testing';

import { CiboService } from './cibo.service';

describe('CiboService', () => {
  let service: CiboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
