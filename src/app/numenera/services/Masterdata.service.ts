import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DESCRIPTORS, FOCI, TYPES } from '../model/data/Corebook.data';
import { Descriptor } from '../model/Descriptor.model';
import { Focus } from '../model/Focus.model';
import { CharacterType } from '../model/Type.model';

@Injectable({
  providedIn: 'root',
})
export class MasterdataService {
  private readonly _descriptions = [...DESCRIPTORS];
  private readonly _types = [...TYPES];
  private readonly _foci = [...FOCI];

  /**
   * Returns available descriptors.
   */
  get descriptions(): Observable<Descriptor[]> {
    return of(this._descriptions);
  }

  /**
   * Returns available types.
   */
  get types(): Observable<CharacterType[]> {
    return of(this._types);
  }

  /**
   * Returns available focus.
   */
  get focus(): Observable<Focus[]> {
    return of(this._foci);
  }
}
