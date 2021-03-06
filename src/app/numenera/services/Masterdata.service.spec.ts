import { TestBed } from '@angular/core/testing';
import { DESCRIPTORS, FOCI, TYPES } from '../model/data/Corebook.data';
import { MasterdataService } from './Masterdata.service';

describe('MasterdataService', () => {
  const _descriptions = [...DESCRIPTORS];
  const _types = [...TYPES];
  const _foci = [...FOCI];

  let service: MasterdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain all known descriptors', (done) => {
    service.descriptions.subscribe((descriptors) => {
      expect(descriptors).toEqual(_descriptions);
      done();
    });
  });

  it('should contain all known types', (done) => {
    service.types.subscribe((types) => {
      expect(types).toEqual(_types);
      done();
    });
  });

  it('should contain all know focus variants', (done) => {
    service.focus.subscribe((focus) => {
      expect(focus).toEqual(_foci);
      done();
    });
  });
});
