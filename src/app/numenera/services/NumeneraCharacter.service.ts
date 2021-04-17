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

  set descriptor(descriptor: Descriptor) {
    this.resetChar('descriptor');
    this.setDescriptor(descriptor);
    this.character$.next(this.character);
  }

  set focus(focus: Focus) {
    this.resetChar('focus');
    this.setFocus(focus);    
    this.character$.next(this.character);
  }

  set type(type: CharacterType) {
    this.resetChar('type');
    this.setCharType(type);
    this.character$.next(this.character);
  }

  set name(name: string) {
    this.character.name = name;
    this.character$.next(this.character);
  }

  /**
   * Replace the old character with a new, empty one.
   * @param disregard Disregard setting a part of the new character (type, focus, etc.).
   */
  private resetChar(disregard: string): void {    
    const desc = this.character.descriptor;
    const focus = this.character.focus;
    const type = this.character.type;
    const name = this.character.name;

    this.character = new NumeneraCharacter();
    this.character.name = name;
    
    if (disregard !== 'descriptor' && desc) {
      this.setDescriptor(desc);
    }

    if (disregard !== 'focus' && focus) {
      this.setFocus(focus);
    }

    if (disregard !== 'type' && type) {
      this.setCharType(type);
    }
  }

  private setDescriptor(desc: Descriptor) {
    this.character.descriptor = desc;
    desc.benefits.forEach(benefit => {
      benefit.upgrade(this.character);
    });
  }

  private setCharType(type: CharacterType) {
    this.character.type = type;
    type.tiers.forEach(tier => {
      if (tier.level === 1) {
        tier.abilities.forEach(ability => {
          ability.upgrade(this.character);
        });
      }
    });
  }

  private setFocus(focus: Focus) {
    this.character.focus = focus;
    focus.benefits.forEach(benefit => {
      benefit.upgrade(this.character);
    });

    focus.tiers.forEach(tier => {
      if (tier.level === 1) {
        tier.abilities.forEach(ability => {
          ability.upgrade(this.character);
        });
      }
    });
  }
}
