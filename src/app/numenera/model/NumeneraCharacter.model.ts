import { Ability } from './Ability.model';
import { Attribute, Edge } from './Attribute.model';
import { Contact } from './Contact.model';
import { Descriptor } from './Descriptor.model';
import { Focus } from './Focus.model';
import { Skill } from './Skill.model';
import { Type } from './Type.model';

/**
 * Domain Aggregate.
 */
export class NumeneraCharacter {
  public name = '';
  public attributes: Array<Attribute> = [];
  public edge: Array<Edge> = [];

  public abilities: Array<Ability> = [];
  public skills: Array<Skill> = [];
  public contacts: Array<Contact> = [];

  private _type!: Type;
  private _focus!: Focus;
  private _descriptor!: Descriptor;

  get type(): Type {
    return this._type;
  }

  set type(type: Type) {
    this._type = type;
    this.attributes = type.attributes;
    this.edge = type.edge;
  }

  get descriptor(): Descriptor {
    return this._descriptor;
  }

  set descriptor(descriptor: Descriptor) {
    this._descriptor = descriptor;

    for (const benefit of descriptor.benefits) {
      benefit.upgrade.upgrade(this);
    }
  }

  get focus(): Focus {
    return this._focus;
  }

  set focus(focus: Focus) {
    this._focus = focus;
    this.abilities = focus.abilities;
  }
}
