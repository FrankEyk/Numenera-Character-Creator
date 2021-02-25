import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Ability } from '../model/Ability.model';
import { Descriptor } from '../model/Descriptor.model';
import { Focus } from '../model/Focus.model';
import { NumeneraCharacter } from '../model/NumeneraCharacter.model';
import { Type } from '../model/Type.model';

@Injectable({
  providedIn: 'root'
})
export class NumeneraCharacterService {

  private character = new NumeneraCharacter();

  readonly name$ = new Subject<string>();
  readonly type$ = new Subject<Type>();
  readonly focus$ = new Subject<Focus>();
  readonly descriptor$ = new Subject<Descriptor>();
  readonly ability$ = new Subject<Ability>();

  readonly character$ = new BehaviorSubject(this.character);

  constructor() {
    this.name$.subscribe(name => this.update('name', name));
    this.type$.subscribe(type => this.update('type', type));
    this.focus$.subscribe(focus => this.update('focus', focus));
    this.descriptor$.subscribe(descriptor => this.update('descriptor', descriptor));
  }

  /**
   * Updates Properties of NumeneraCharacter and notifies all subscriber.
   * @param property property to update.
   * @param value the new value to assign.
   */
  private update<Key extends keyof NumeneraCharacter>(property: Key, value: any): void {
    this.character[property] = value;
    this.character$.next(this.character);
  }

}
