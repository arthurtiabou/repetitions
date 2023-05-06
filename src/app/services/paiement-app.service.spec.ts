import { TestBed } from '@angular/core/testing';

import { PaiementAppService } from './paiement-app.service';

describe('PaiementAppService', () => {
  let service: PaiementAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaiementAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
