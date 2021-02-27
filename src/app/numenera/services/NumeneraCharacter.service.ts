import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Attribute, Edge } from '../model/Attribute.model';
import { Descriptor } from '../model/Descriptor.model';
import { Focus } from '../model/Focus.model';
import { NumeneraCharacter } from '../model/NumeneraCharacter.model';
import { Type } from '../model/Type.model';

@Injectable({
  providedIn: 'root',
})
export class NumeneraCharacterService {
  private character = new NumeneraCharacter();

  readonly character$ = new BehaviorSubject(this.character);

  /**
   * Updates Properties of NumeneraCharacter and notifies all subscriber.
   *
   * @param property property to update.
   * @param value the new value to assign.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private update<Key extends keyof NumeneraCharacter>(
    property: Key,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
  ): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.character[property] = value;
    this.character$.next(this.character);
  }

  /**
   * Set attribute on NumeneraCharacter.
   * If the attribute does not exist, it will be created otherwise it will be updated.
   *
   * @param attribute the attribute to set.
   */
  set attribute(attribute: Attribute) {
    if (
      this.character.attributes.findIndex((a) => a.type === attribute.type) ===
      -1
    ) {
      this.character.attributes.push(attribute);
    } else {
      this.character.attributes
        .filter((a) => a.type === attribute.type)
        .map((a) => (a.value = attribute.value));
    }

    this.character$.next(this.character);
  }

  /**
   * Set edge on NumeneraCharacter.
   * If the edge attribute does not exist, it will be created otherwise it will be updated.
   *
   * @param edge the edge to set.
   */
  set edge(edge: Edge) {
    if (this.character.edge.findIndex((a) => a.type === edge.type) === -1) {
      this.character.edge.push(edge);
    } else {
      this.character.attributes
        .filter((a) => a.type === edge.type)
        .map((a) => (a.value = edge.value));
    }

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

  set type(type: Type) {
    this.character.type = type;
    this.character$.next(this.character);
  }

  set name(name: string) {
    this.character.name = name;
    this.character$.next(this.character);
  }

  set descriptor(descriptor: Descriptor) {
    this.character.descriptor = descriptor;
    this.character$.next(this.character);
  }
}
