import {
  Upgrade,
  PLUS_TWO_INT,
  INABLITY_STUDYING,
  TRAINED_POSITIVE_SOCIAL_INTERACTIONS,
  TRAINED_INFLUENCING_OTHERS_MINDS,
  CONTACT_INFLUENTIAL_POSITION,
  INABLITY_RESIST_MENTAL_ATTACK,
} from './Upgrade.model';

/** Character Benefit. */
export interface Benefit {
  name: string;
  description: string;
  upgrade: Upgrade;
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
      'You have an important contact who is in an influential position, such as a minor noble, the captain of the town guard, an Aeon Priest, ' +
      'or the head of a large gang of thieves. You and the GM should work out the details together.',
    upgrade: CONTACT_INFLUENTIAL_POSITION
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
    upgrade: INABLITY_RESIST_MENTAL_ATTACK
  },
];

/** Clever benefit definition. */
export const CLEVER: Array<Benefit> = [
  {
    name: 'Smart',
    description: '+2 to your Intellect Pool',
    upgrade: PLUS_TWO_INT,
  },
  {
    name: 'Skill',
    description:
      'You’re trained in all interactions involving lies or trickery.',
    upgrade: {
      type: '',
      effect: '',
    },
  },
  {
    name: 'Skill',
    description: 'You’re trained in defense rolls to resist mental effects.',
    upgrade: {
      type: '',
      effect: '',
    },
  },
  {
    name: 'Skill',
    description:
      'You’re trained in all tasks involving, identifying, or assessing danger, lies, quality, importance, function, or power.',
    upgrade: {
      type: '',
      effect: '',
    },
  },
  {
    name: 'Inability',
    description:
      'You were never good at studying or retaining trivial knowledge. Any task involving lore, knowledge, or understanding is hindered.',
    upgrade: {
      type: '',
      effect: '',
    },
  },
];
