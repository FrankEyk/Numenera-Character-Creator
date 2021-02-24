import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ability } from '../model/ability.model';
import { Descriptor } from '../model/descriptor.model';
import { Focus } from '../model/focus.model';
import { Type } from '../model/type.model';

@Injectable({
  providedIn: 'root'
})
export class NumeneraCharacterService {

  readonly type$ = new Subject<Type>();
  readonly focus$ = new Subject<Focus>();
  readonly descriptor$ = new Subject<Descriptor>();
  readonly ability$ = new Subject<Ability>();

  constructor() {
  }

}
