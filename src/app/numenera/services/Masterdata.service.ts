import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NUMENERA_COREBOOK } from '../model/data/Corebook.data';
import { Descriptor } from '../model/Descriptor.model';
import { Focus } from '../model/Focus.model';
import { CharacterType } from '../model/Type.model';

@Injectable({
  providedIn: 'root',
})
export class MasterdataService {
  private readonly _descriptions = [...NUMENERA_COREBOOK.descriptors];
  private readonly _types = [...NUMENERA_COREBOOK.types];
  private readonly _foci = [...NUMENERA_COREBOOK.foci];

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
