/** Character Abilities, like Fire Shroud. */
export interface Ability {
  /** The text that is shown in the browser. */
  name: string;

  /** The description for the ability. */
  description: string;
}

export const SHROUD_OF_FLAME: Ability = {
  name: 'Shroud of Flame',
  description:
    '(1 Intellect point). At' +
    'your command, your entire body becomes' +
    'shrouded in flames that last up to ten minutes.' +
    'The fire doesn’t burn you, but it automatically' +
    'inflicts 2 points of damage to anyone who tries' +
    'to touch you or strike you with a melee attack.' +
    'Flames from another source can still hurt you.' +
    'While the shroud is active, you gain +2 points' +
    'of Armor that protect only against damage' +
    'from fire from another source. Enabler. +2',
};

export const FIRE_POWERS: Ability = {
  name: 'Fire Powers',
  description:
    'Your special abilities that would' +
    'normally use force or other energy (such as' +
    'electricity) instead use fire. For example, force' +
    'blasts from Onslaught are blasts of flame, and' +
    'Flash is a burst of fire. These alterations change' +
    'nothing except the type of damage and the fact' +
    'that it might start fires. As another example,' +
    'Barrier produces a wall of roaring flames. In' +
    'this case, the alteration changes the esotery so' +
    'that the barrier is not solid but instead inflicts' +
    '1 point of damage to anything that touches it' +
    'and 4 points of damage to anyone who passes' +
    'through it. Even fighting moves such as No' +
    'Need for Weapons might mean your hands and' +
    'fists are surrounded by flames.',
};

export const MENTAL_ESOTERIES: Ability = {
  name: 'Mental Esoteries',
  description:
    'When you apply Effort to' +
    'the special abilities that control minds, like the' +
    'Mind Control esotery, the Mind Reading esotery,' +
    'or the Crowd Control trick of the trade, you get' +
    'a free level of Effort on that task. Enabler.',
};

export const TELEPATHIC: Ability = {
  name: 'Telepathic',
  description:
    '(1+ Intellect points). You can speak' +
    'telepathically with others who are within short' +
    'range. Communication is two-way, but the other' +
    'party must be willing and able to communicate.' +
    'You don’t have to see the target, but you must' +
    'know that it’s within range. You can have more' +
    'than one active contact at once, but you must' +
    'establish contact with each target individually.' +
    'Each contact lasts up to ten minutes. If you apply' +
    'a level of Effort to increase the duration rather than' +
    'affect the difficulty, the contact lasts for 28 hours.' +
    'Action to establish contact.',
};

