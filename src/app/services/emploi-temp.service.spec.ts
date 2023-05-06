import { TestBed } from '@angular/core/testing';

import { EmploiTempService } from './emploi-temp.service';

describe('EmploiTempService', () => {
  let service: EmploiTempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploiTempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
