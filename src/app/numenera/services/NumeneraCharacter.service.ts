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
    if (attribute.type === Attribute.MIGHT) {
      this.character.mightPool = attribute.value;
    } else if (attribute.type === Attribute.SPEED) {
      this.character.speedPool = attribute.value;
    } else {
      this.character.intPool = attribute.value;
    }

    this.character$.next(this.character);
  }

  /**
   * Set edge on NumeneraCharacter.
   * If the edge attribute does not exist, it will be created otherwise it will be updated.
   *
   * @param edge the edge to set.
   */
  set edge(edge: { type: Attribute; value: number }) {

    if (edge.type === Attribute.MIGHT) {
      this.character.mightEdge = edge.value;
    } else if (edge.type === Attribute.SPEED) {
      this.character.speedEdge = edge.value;
    } else {
      this.character.intEdge = edge.value;
    }
    
    this.character$.next(this.character);
  }

  set description(description: Descriptor) {
    this.character.descriptor = description;

    description.benefits.forEach(benefit => {
      benefit.upgrade(this.character);
    });

    this.character$.next(this.character);
  }

  set focus(focus: Focus) {
    this.character.focus = focus;

    focus.benefits.forEach(benefit => {
      benefit.upgrade(this.character);
    });
    
    this.character$.next(this.character);
  }

  set type(type: CharacterType) {
    this.character.type = type;

    type.tiers.forEach(tier => {
      if (tier.level === 1) {
        tier.abilities.forEach(ability => {
          ability.upgrade(this.character);
        });
      }
    });

    this.character$.next(this.character);
  }

  set name(name: string) {
    this.character.name = name;
    this.character$.next(this.character);
  }
}
