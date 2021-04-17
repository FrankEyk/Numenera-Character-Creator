import { ActionType } from './Ability.model';
import { Benefit } from './Benefit.model';
import { Origin } from './Origin.model';
import { Upgrade } from './Upgrade.model';

/**
 * Available Attributes in Numenera.
 */

interface Ability {
  name: string;
  description: string;
  type?: ActionType;
  cost?: { attribute: Attribute; value: number };
  benefit?: Benefit;
  upgrade: Upgrade;
}

/**
 * The Abilities a character gets, sorted per Tier.
 */
interface TierAbility {
  level: number;
  abilities: Ability[];
}

export interface Talent {
  name: string;
  description: string;
  type: ActionType;
  cost?: { attribute: Attribute; value: number };
  benefit?: Benefit;
}

interface TalentTier {
  level: number;
  talents: Talent[];
}

/**
 * The talents of a character (Esotery, Fighting Move, etc.).
 * These are the talents (abilities) that a character gains
 * when he/she advances in the tiers.
 */
interface Talents {
  name: string;
  description: string;
  tiers: TalentTier[];
}

export enum Attribute {
  MIGHT = 'Might',
  SPEED = 'Speed',
  INTELLECT = 'Intellect',
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
  tiers: Array<TierAbility>;
  talents: Talents;
}
