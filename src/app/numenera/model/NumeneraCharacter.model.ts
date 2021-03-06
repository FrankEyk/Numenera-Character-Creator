import { Descriptor } from './Descriptor.model';
import { Focus } from './Focus.model';
import { Attribute, CharacterType } from './Type.model';
/**
 * Numenera Player Character Model.
 */
export class NumeneraCharacter {
  /** Character Name */
  name?: string;
  /** Character Type */
  type?: CharacterType;
  /** Character Description */
  descriptor?: Descriptor;
  /** Character Focus */
  focus?: Focus;
  /** Charater Attribute Pool */
  pool: Array<{ attribute: Attribute; value: number }> = [];
  /** Character Edges */
  edge: Array<{ attribute: Attribute; value: number }> = [];
}
