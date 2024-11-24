import { TestBed } from '@angular/core/testing';

import { PdiService } from './pdi.service';

describe('PdiService', () => {
  let service: PdiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
