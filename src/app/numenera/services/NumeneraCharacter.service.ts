import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ability } from '../model/Ability.model';
import { Descriptor } from '../model/Descriptor.model';
import { Focus } from '../model/Focus.model';
import { Type } from '../model/Type.model';

@Injectable({
  providedIn: 'root'
})
export class NumeneraCharacterService {

  readonly name$ = new Subject<string>();
  readonly type$ = new Subject<Type>();
  readonly focus$ = new Subject<Focus>();
  readonly descriptor$ = new Subject<Descriptor>();
  readonly ability$ = new Subject<Ability>();

  constructor() {
  }

}
