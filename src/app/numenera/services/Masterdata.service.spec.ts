import { TestBed } from '@angular/core/testing';
import { NUMENERA_COREBOOK } from '../model/data/Corebook.data';
import { NUMENERA_DISCOVERY } from '../model/data/Discovery.data';
import { MasterdataService } from './Masterdata.service';

describe('MasterdataService', () => {
  const _descriptions = [...NUMENERA_COREBOOK.descriptors, ...NUMENERA_DISCOVERY.descriptors];
  const _types = [...NUMENERA_COREBOOK.types, ...NUMENERA_DISCOVERY.types];
  const _foci = [...NUMENERA_COREBOOK.foci, ...NUMENERA_DISCOVERY.foci];

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
