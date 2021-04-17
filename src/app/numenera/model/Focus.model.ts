import { ActionType } from './Ability.model';
import { Benefit } from './Benefit.model';
import { Origin } from './Origin.model';
import { Attribute } from './Type.model';
import { Upgrade } from './Upgrade.model';

/**
 * As you progress to a new tier, your focus grants you
 * more abilities.
 */
interface Tier {
  level: number;
  abilities: TierAbility[];
}

interface TierAbility {
  name: string;
  description: string;
  type: ActionType;
  cost?: { attribute: Attribute; value: number };
  upgrade: Upgrade;
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
