import { ActionType } from './Action.model';
import { NumeneraCharacter } from './NumeneraCharacter.model';
import { Attribute } from './Type.model';

/*
 * Upgrade Funtion for a Benefit.
 */
interface Upgrade {
  (character: NumeneraCharacter): void;
}

/**
 * A benefit represents a perk of you character.
 */
export interface Benefit {
  /**Benefit name */
  name: string;
  /** Benefit description */
  description?: string;
  /** Action Type */
  type?: ActionType;
  /** Cost to activate (optional) */
  cost?: { attribute: Attribute; value: number };
  /** Update funtion to apply to character. */
  upgrade: Upgrade;
}
