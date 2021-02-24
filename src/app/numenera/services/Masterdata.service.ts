import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Descriptor, DESCRIPTIONS } from '../model/Descriptor.model';
import { FOCUS, Focus } from '../model/Focus.model';
import { Type, TYPES } from '../model/Type.model';

@Injectable({
  providedIn: 'root'
})
export class MasterdataService {

  constructor() { }

  /**
   * Returns available descriptors.
   */
  get descriptors(): Observable<Descriptor[]>{
    return of(DESCRIPTIONS);
  }

  /**
   * Returns available types.
   */
  get types(): Observable<Type[]> {
    return of(TYPES);
  }

  /**
   * Returns available focus.
   */
  get focus(): Observable<Focus[]> {
    return of(FOCUS);
  }

}
