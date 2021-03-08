import { ActionType } from './Action.model';
import { Benefit } from './Benefit.model';
import { Origin } from './Origin.model';
import { Attribute } from './Type.model';

/**
 * As you progress to a new tier, your focus grants you
 * more abilities.
 */
interface Tier {
  name: string;
  level: number;
  description: string;
  type: ActionType;
  cost?: { attribute: Attribute; value: number };
  benefit?: Benefit;
}

/**
 * Focus is what makes your character unique.
 * No two PCs in a group should have the same
 * focus. Your focus gives you benefits when you
 * create your character and each time you ascend to
 * the next tier.
 */
export interface Focus {
  name: string;
  origin: Origin;
  description: string;
  benefits: Array<Benefit>;
  tiers: Array<Tier>;
}
