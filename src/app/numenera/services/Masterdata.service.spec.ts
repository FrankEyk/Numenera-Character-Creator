import { TestBed } from '@angular/core/testing';
import { DESCRIPTIONS } from '../model/Descriptor.model';
import { FOCUS } from '../model/Focus.model';
import { TYPES } from '../model/Type.model';
import { MasterdataService } from './Masterdata.service';

describe('MasterdataService', () => {
  let service: MasterdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain all known descriptors', (done) => {
    service.descriptors.subscribe((descriptors) => {
      expect(descriptors).toEqual(DESCRIPTIONS);
      done();
    });
  });

  it('should contain all known types', (done) => {
    service.types.subscribe((types) => {
      expect(types).toEqual(TYPES);
      done();
    });
  });

  it('should contain all know focus variants', (done) => {
    service.focus.subscribe((focus) => {
      expect(focus).toEqual(FOCUS);
      done();
    });
  });
});
