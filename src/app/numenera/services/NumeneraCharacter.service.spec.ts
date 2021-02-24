import { TestBed } from '@angular/core/testing';

import { NumeneraCharacterService } from './NumeneraCharacter.service';

describe('NumeneraCharacterService', () => {
  let service: NumeneraCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumeneraCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
