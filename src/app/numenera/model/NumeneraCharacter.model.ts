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
  // pool: Array<{ type: Attribute; value: number }> = [];
  
  mightPool = 0;
  speedPool = 0;
  intPool = 0;
  
  /** Character Edges */
  // edge: Array<{ type: Attribute; value: number }> = [];
  mightEdge = 0;
  speedEdge = 0;
  intEdge = 0;
  /** Character Money. */
  shins = 0;
  /** Character Connections. */
  connections: Array<string> = [];
  /** Character Equiptment. */
  equipment: Array<Equipment> = [];
  /** Character Abilities */
  skills: Array<string> = [];
  /** Number of Cyphers the character can use without penalties */
  cypheruse = 0;

  //TODO create models for abilities, connections

  set descriptor(descriptor: Descriptor) {
    this._descriptor = descriptor;
  }

  get descriptor(): Descriptor {
    return this._descriptor;
  }

  set type(type: CharacterType) {
    this._type = type;

    type.attributes.forEach(attribute => {
      if (attribute.type === Attribute.MIGHT) {
        this.mightPool = attribute.value;
      } else if (attribute.type === Attribute.SPEED) {
        this.speedPool = attribute.value;
      } else {
        this.intPool = attribute.value;
      }
    });

    type.edges.forEach(edge => {
      if (edge.type === Attribute.MIGHT) {
        this.mightEdge = edge.value;
      } else if (edge.type === Attribute.SPEED) {
        this.speedEdge = edge.value;
      } else {
        this.intEdge = edge.value;
      } 
    });
  }

  get type(): CharacterType {
    return this._type;
  }
}
