import { Ability, Abilities } from './_ability.model';

/** Character Focus. */
export interface Focus {
  name: string;
  description: string;
  abilities: Ability[];
}

// DATA
/** Character Focus Database. */
export const FOCUS: Array<Focus> = [
  {
    name: 'Commands Mental Powers',
    description:
      'You have always had special abilities that ' +
      'others didn’t seem to share. Through practice ' +
      'and devotion, you have honed this unique ' +
      'talent so that you can harness the power of ' +
      'your mind to perform deeds. ' +
      'No one can tell that you have this ability just ' +
      'by looking at you, although you wear a crystal or ' +
      'jewel somewhere on your head to help focus your ' +
      'power. Either this focusing object was given to ' +
      'you by someone who recognized your ability, or ' +
      'you came upon it by accident and it triggered your ' +
      'abilities. Some people with mental powers— ' +
      'often called psychics or psionics by ordinary ' +
      'folks—are secretive and a little paranoid. ' +
      'Although Nanos frequently command ' +
      'mental powers, psionic characters of every ' +
      'other type are not uncommon.',
    abilities: [Abilities.MENTAL_ESOTERIES, Abilities.TELEPATHIC],
  },
  {
    name: 'Bears a Halo of Fire',
    description:
      'You can create a sheath of flames around your ' +
      'body. You leave scorch marks wherever you ' +
      'go, and you can’t handle combustible objects ' +
      'without first dousing your inherent flames. Your ' +
      'special abilities (such as Nano esoteries) are ' +
      'tainted with flame. Fiery visuals accompany your ' +
      'powers, and in some cases, your predilection for ' +
      'flame actually reshapes your abilities to take on a ' +
      'fiery nature where none existed before. ' +
      'You probably wear red and yellow, or ' +
      'perhaps black. ' +
      'Although most of those who take up this ' +
      'mantle are Nanos, flame-wielding Glaives and ' +
      'Jacks are fearsome indeed.',
    abilities: [Abilities.FIRE_POWERS, Abilities.SHROUD_OF_FLAME],
  },
];
