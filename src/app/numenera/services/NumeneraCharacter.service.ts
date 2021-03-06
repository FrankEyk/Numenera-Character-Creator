import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Descriptor } from '../model/Descriptor.model';
import { Focus } from '../model/Focus.model';
import { NumeneraCharacter } from '../model/NumeneraCharacter.model';
import { Attribute, CharacterType } from '../model/Type.model';

@Injectable({
  providedIn: 'root',
})
export class NumeneraCharacterService {
  private character = new NumeneraCharacter();

  readonly character$ = new Subject<NumeneraCharacter>();

  /**
   * Set attribute on NumeneraCharacter.
   * If the attribute does not exist, it will be created otherwise it will be updated.
   *
   * @param attribute the attribute to set.
   */
  set attribute(attribute: { type: Attribute; value: number }) {
    this.character.pool
      .filter((a) => a.type == attribute.type)
      .map((a) => (a.value = attribute.value));
    this.character$.next(this.character);
  }

  /**
   * Set edge on NumeneraCharacter.
   * If the edge attribute does not exist, it will be created otherwise it will be updated.
   *
   * @param edge the edge to set.
   */
  set edge(edge: { type: Attribute; value: number }) {
    this.character.edge
      .filter((a) => a.type == edge.type)
      .map((a) => (a.value = edge.value));
    this.character$.next(this.character);
  }

  set description(description: Descriptor) {
    this.character.descriptor = description;
    this.character$.next(this.character);
  }

  set focus(focus: Focus) {
    this.character.focus = focus;
    this.character$.next(this.character);
  }

  set type(type: CharacterType) {
    this.character.type = type;
    this.character$.next(this.character);
  }

  set name(name: string) {
    this.character.name = name;
    this.character$.next(this.character);
  }
}
