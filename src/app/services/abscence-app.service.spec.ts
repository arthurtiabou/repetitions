import { TestBed } from '@angular/core/testing';

import { AbscenceAppService } from './abscence-app.service';

describe('AbscenceAppService', () => {
  let service: AbscenceAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbscenceAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
