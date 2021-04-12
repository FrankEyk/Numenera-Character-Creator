import { ActionType } from './Ability.model';
import { Attribute } from './Type.model';
import { Upgrade } from './Upgrade.model';


/**
 * A benefit represents a perk of you character.
 */
export interface Benefit {
  /**Benefit name */
  name: string;
  /** Benefit description */
  description: string;
  /** Action Type */
  type?: ActionType;
  /** Cost to activate (optional) */
  cost?: { attribute: Attribute; value: number };
  /** Update funtion to apply to character. */
  upgrade: Upgrade;
}
