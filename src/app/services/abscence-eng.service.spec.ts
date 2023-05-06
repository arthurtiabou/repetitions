import { TestBed } from '@angular/core/testing';

import { AbscenceEngService } from './abscence-eng.service';

describe('AbscenceEngService', () => {
  let service: AbscenceEngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbscenceEngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
