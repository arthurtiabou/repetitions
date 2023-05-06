import { TestBed } from '@angular/core/testing';

import { PaiementEngService } from './paiement-eng.service';

describe('PaiementEngService', () => {
  let service: PaiementEngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaiementEngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
