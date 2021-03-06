import { Origin } from './Origin.model';

/**
 * Available Attributes in Numenera.
 */

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
}
