/** Character Abilities, like Fire Shroud. */
export interface Ability {
  /** The text that is shown in the browser. */
  name: string;

  /** The description for the ability. */
  description: string;
}

export class Abilities {
    
  static readonly SHROUD_OF_FLAME: Ability = {
    name: 'Shroud of Flame',
    description:
      '(1 Intellect point). At' +
      'your command, your entire body becomes ' +
      'shrouded in flames that last up to ten minutes. ' +
      'The fire doesn’t burn you, but it automatically ' +
      'inflicts 2 points of damage to anyone who tries ' +
      'to touch you or strike you with a melee attack. ' +
      'Flames from another source can still hurt you. ' +
      'While the shroud is active, you gain +2 points ' +
      'of Armor that protect only against damage ' +
      'from fire from another source. Enabler. +2',
  };


  static readonly FIRE_POWERS: Ability = {
    name: 'Fire Powers',
    description:
      'Your special abilities that would ' +
      'normally use force or other energy (such as ' +
      'electricity) instead use fire. For example, force ' +
      'blasts from Onslaught are blasts of flame, and ' +
      'Flash is a burst of fire. These alterations change ' +
      'nothing except the type of damage and the fact ' +
      'that it might start fires. As another example, ' +
      'Barrier produces a wall of roaring flames. In ' +
      'this case, the alteration changes the esotery so ' +
      'that the barrier is not solid but instead inflicts ' +
      '1 point of damage to anything that touches it ' +
      'and 4 points of damage to anyone who passes ' +
      'through it. Even fighting moves such as No ' +
      'Need for Weapons might mean your hands and ' +
      'fists are surrounded by flames.',
  };

  static readonly MENTAL_ESOTERIES: Ability = {
    name: 'Mental Esoteries',
    description:
      'When you apply Effort to ' +
      'the special abilities that control minds, like the ' +
      'Mind Control esotery, the Mind Reading esotery, ' +
      'or the Crowd Control trick of the trade, you get ' +
      'a free level of Effort on that task. Enabler.',
  };

  static readonly TELEPATHIC: Ability = {
    name: 'Telepathic',
    description:
      '(1+ Intellect points). You can speak ' +
      'telepathically with others who are within short ' +
      'range. Communication is two-way, but the other ' +
      'party must be willing and able to communicate. ' +
      'You don’t have to see the target, but you must ' +
      'know that it’s within range. You can have more ' +
      'than one active contact at once, but you must ' +
      'establish contact with each target individually. ' +
      'Each contact lasts up to ten minutes. If you apply ' +
      'a level of Effort to increase the duration rather than ' +
      'affect the difficulty, the contact lasts for 28 hours. ' +
      'Action to establish contact.',
  };

  static readonly COMBAT_PROWESS: Ability = {
    name: 'Combat Prowess',
    description:
      'You add +1 damage to one ' +
      'type of attack of your choice: melee attacks or ' +
      'ranged attacks. Enabler.'
  };

  static readonly TRAINED_IN_ARMOR: Ability = {
    name: 'Trained in Armor',
    description:
      'You can wear armor for ' +
      'long periods of time without tiring and can ' +
      'compensate for slowed reactions from wearing ' +
      'armor. You reduce the Speed Effort cost for ' +
      'wearing armor by 1. Enabler'
  };

  static readonly AGGRESSION: Ability = {
    name: 'Aggression',
    description:
      '(2 Might points): You focus on ' +
      'making attacks to such an extent that you ' +
      'leave yourself vulnerable to your opponents. ' +
      'While this ability is active, you gain an ' +
      'asset on your melee attacks, and your Speed ' +
      'defense rolls against melee and ranged attacks ' +
      'are hindered. This effect lasts for as long as' +
      'you wish, but it ends if no combat is taking ' +
      'place within range of your senses. Enabler.'
  };

  static readonly FLEET_OF_FOOT: Ability = {
    name: 'Fleet of Foot',
    description:
      '(1+ Speed points): You can ' +
      'move a short distance as part of another ' +
      'action. You can move a long distance as ' +
      'your entire action for a turn. If you apply a ' +
      'level of Effort to this ability, you can move ' +
      'a long distance and make an attack as your ' +
      'entire action for a turn, but the attack is ' +
      'hindered. Enabler.'
  };

  static readonly IMPRESSIVE_DISPLAY: Ability = {
    name: 'Impressive Display',
    description:
      '(2 Might points): ' +
      'You perform a feat of strength, speed, ' +
      'or combat, impressing those nearby. For ' +
      'the next minute you gain an asset in all ' +
      'interaction tasks with people who saw you ' +
      'use this ability. Action.'
  };

  static readonly MISDIRECT: Ability = {
    name: 'Misdirect',
    description:
      '(3 Speed points): When an ' +
      'opponent misses you, you can redirect ' +
      'their attack to another target (a creature ' +
      'or object) of your choosing that’s within ' +
      'immediate range of you. Make an ' +
      'unmodified attack roll against the new ' +
      'target (do not use any of your or the ' +
      'opponent’s modifiers to the attack roll, but ' +
      'you can apply Effort for accuracy). If the ' +
      'attack hits, the target takes damage from ' +
      'your opponent’s attack. Enabler.'
  };

  static readonly NO_NEED_FOR_WEAPONS: Ability = {
    name: 'No Need for Weapons',
    description:
      'When you make an ' +
      'unarmed attack (such as a punch or kick), ' +
      'it counts as a medium weapon instead of a ' +
      'light weapon. Enabler.'
  };

  static readonly TRAINED_WITHOUT_ARMOR: Ability = {
    name: 'Trained Without Armor',
    description:
      'You are trained in ' +
      'Speed defense actions when not wearing ' +
      'armor. Enabler.'
  };



  private constructor() {
    //NOOP
  }

}