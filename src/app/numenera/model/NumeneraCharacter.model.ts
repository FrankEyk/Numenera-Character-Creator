import { Descriptor } from './Descriptor.model';
import { Equipment } from './Equipment.model';
import { Focus } from './Focus.model';
import { Attribute, CharacterType } from './Type.model';
/**
 * Numenera Player Character Model.
 */
export class NumeneraCharacter {
  /** Character Name */
  name?: string;
  /** Character Type */
  private _type!: CharacterType;
  /** Character Description */
  private _descriptor!: Descriptor;
  /** Character Focus */
  focus?: Focus;
  /** Charater Attribute Pool */
  pool: Array<{ type: Attribute; value: number }> = [];
  /** Character Edges */
  edge: Array<{ type: Attribute; value: number }> = [];
  /** Character Money. */
  shins = 0;
  /** Character Connections. */
  connections: Array<string> = [];
  /** Character Equiptment. */
  equipment: Array<Equipment> = [];
  /** Character Abilities */
  skills: Array<string> = [];
  //TODO crate models for abilities, connections

  set descriptor(descriptor: Descriptor) {
    this._descriptor = descriptor;
  }

  get descriptor(): Descriptor {
    return this._descriptor;
  }

  set type(type: CharacterType) {
    this._type = type;
    this.pool = [];
    this.pool = type.attributes;
  }

  get type(): CharacterType {
    return this._type;
  }
}
