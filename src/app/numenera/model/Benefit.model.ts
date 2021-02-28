import { AttributeType } from './Attribute.model';
import { Proficiency } from './Skill.model';
import {
  ContactUpgradeStrategy,
  PoolUpgradeStrategy,
  SkillUpgradeStratey,
  UpgradeStrategy,
} from './Upgrade.model';

const PLUS_TWO_INT = new PoolUpgradeStrategy(AttributeType.INTELLECT, +2);
const INABLITY_STUDYING = new SkillUpgradeStratey({
  name: 'Inability Studying',
  effect: 'Studying or retaining facts',
  proficiency: Proficiency.INABILITY,
});
const INABLITY_RESIST_MENTAL_ATTACK = new SkillUpgradeStratey({
  name: 'Inability resisting mental attacks',
  effect: 'Resisting mental attacks',
  proficiency: Proficiency.INABILITY,
});
const TRAINED_POSITIVE_SOCIAL_INTERACTIONS = new SkillUpgradeStratey({
  name: 'Trained positive social interactions',
  effect: 'Positive or pleasant social interactions',
  proficiency: Proficiency.TRAINED,
});
const TRAINED_INFLUENCING_OTHERS_MINDS = new SkillUpgradeStratey({
  name: 'Trained Influencing Others Minds',
  effect: 'Using esoteries or abilities to influence the minds of others',
  proficiency: Proficiency.TRAINED,
});
const CONTACT_INFLUENTIAL_POSITION = new ContactUpgradeStrategy({
  description: 'You have an important contact in a influential position.',
});

/** Character Benefit. */
export interface Benefit {
  name: string;
  description: string;
  upgrade: UpgradeStrategy;
}

//DATA
/** Charming benefit definition. */
export const CHARMING: Array<Benefit> = [
  {
    name: 'Personable',
    description: '+2 to your Intellect Pool',
    upgrade: PLUS_TWO_INT,
  },
  {
    name: 'Skill',
    description:
      'You’re trained in all tasks involving positive or pleasant social interaction.',
    upgrade: TRAINED_POSITIVE_SOCIAL_INTERACTIONS,
  },
  {
    name: 'Skill',
    description:
      'You’re trained when using esoteries or special abilities that influence the minds of others.',
    upgrade: TRAINED_INFLUENCING_OTHERS_MINDS,
  },
  {
    name: 'Contact',
    description:
      'You have an important contact who is in an influential position, such as a minor noble, the captain of the town guard, an Aeon Priest, or the head of a large gang of thieves. You and the GM should work out the details together.',
    upgrade: CONTACT_INFLUENTIAL_POSITION,
  },
  {
    name: 'Inability',
    description:
      'You were never good at studying or retaining facts. Any task involving lore, knowledge, or understanding is hindered.',
    upgrade: INABLITY_STUDYING,
  },
  {
    name: 'Inability',
    description:
      'Your willpower is not one of your strong points. Whenever you try to resist a mental attack, you’re hindered.',
    upgrade: INABLITY_RESIST_MENTAL_ATTACK,
  },
];

/** Clever benefit definition. */
export const CLEVER: Array<Benefit> = [
  {
    name: 'Smart',
    description: '+2 to your Intellect Pool',
    upgrade: PLUS_TWO_INT,
  },
];
