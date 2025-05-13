import { TestBed } from '@angular/core/testing';

import { SalutationService } from './salutation.service';

describe('SalutationService', () => {
  let service: SalutationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalutationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('devrait retourner un message de salutation personnalisé', () => {
    const nom = 'Mon Pote';
    expect(service.saluer(nom)).toBe(`Salut ${nom} !`);
  });
});
