/** Character Benefit. */
export interface Benefit {

  name: string;
  description: string;
}

/** Charming benefit definition. */
export const CHARMING: Array<Benefit> = [
  {
    name: 'Personable',
    description: '+2 to your Intellect Pool'
  },
  {
    name: 'Skill',
    description: 'You’re trained in all tasks involving positive or pleasant social interaction.'
  },
  {
    name: 'Skill',
    description: 'You’re trained when using esoteries or special abilities that influence the minds of others.'
  },
  {
    name: 'Contact',
    description: 'You have an important contact who is in an influential position, such as a minor noble, the captain of the town guard, an Aeon Priest, or the head of a large gang of thieves. You and the GM should work out the details together.'
  },
  {
    name: 'Inability',
    description: 'You were never good at studying or retaining facts. Any task involving lore, knowledge, or understanding is hindered.'
  },
  {
    name: 'Inability',
    description: 'Your willpower is not one of your strong points. Whenever you try to resist a mental attack, you’re hindered.'
  }
];

/** Clever benefit definition. */
export const CLEVER: Array<Benefit> = [
  {
    name: 'Smart',
    description: '+2 to your Intellect Pool'
  },
  {
    name: 'Skill',
    description: 'You’re trained in all interactions involving lies or trickery.'
  },
  {
    name: 'Skill',
    description: 'You’re trained in defense rolls to resist mental effects.'
  },
  {
    name: 'Skill',
    description: 'You’re trained in all tasks involving, identifying, or assessing danger, lies, quality, importance, function, or power.'
  },
  {
    name: 'Inability',
    description: 'You were never good at studying or retaining trivial knowledge. Any task involving lore, knowledge, or understanding is hindered.'
  }
]
