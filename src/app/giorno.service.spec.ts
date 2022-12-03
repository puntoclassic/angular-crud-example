import { TestBed } from '@angular/core/testing';

import { GiornoService } from './giorno.service';

describe('GiornoService', () => {
  let service: GiornoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiornoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
