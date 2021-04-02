import { ActionType } from './Ability.model';
import { Benefit } from './Benefit.model';
import { Origin } from './Origin.model';

/**
 * Available Attributes in Numenera.
 */


interface Ability {
  name: string;
  description: string;
  type?: ActionType;
  cost?: { attribute: Attribute; value: number };
  benefit?: Benefit;
}

interface Tier {
  level: number;
  abilities: Ability[];
}

interface Talent {
  name: string;
  description: string;
  level: number;
  type: ActionType;
  cost?: { attribute: Attribute; value: number };
  benefit?: Benefit;
}

interface Talents {
  name: string;
  description: string;
  talents: Talent[];
}

export enum Attribute {
  MIGHT = 0,
  SPEED = 1,
  INTELLECT = 2,
}

/**
 * Character type is the core of your character. Your type
 * helps determine your character’s place in the world
 * and relationship with other people in the setting.
 */
export interface CharacterType {
  name: string;
  origin: Origin;
  description?: string;
  attributes: Array<{ type: Attribute; value: number }>;
  edges: Array<{ type: Attribute; value: number }>;
  tiers: Array<Tier>;
  cypheruse: number;
  talents: Talents;
}
