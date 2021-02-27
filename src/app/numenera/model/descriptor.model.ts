import { Benefit, CHARMING, CLEVER } from './Benefit.model';
/** Character Descriptor. */
export interface Descriptor {
  name: string;
  description: string;
  benefits: Benefit[];
}

//DATA
/** Descripttor Database. */
export const DESCRIPTIONS: Array<Descriptor> = [
  {
    name: 'Charming',
    description:
      'You’re a smooth talker and a charmer. Whether ' +
      'through seemingly supernatural means or just a ' +
      'way with words, you can convince others to do as ' +
      'you wish. Most likely, you’re physically attractive ' +
      'or at least highly charismatic, and others ' +
      'enjoy listening to your voice. You probably pay ' +
      'attention to your appearance, keeping yourself ' +
      'well groomed. You make friends easily. ' +
      'You play up the personality facet of your Intellect ' +
      'stat; intelligence is not your strong suit. You’re ' +
      'personable, not necessarily studious or strong-willed.',
    benefits: CHARMING,
  },
  {
    name: 'Clever',
    description:
      'You’re quick-witted, thinking well on your ' +
      'feet. You understand people, so you can fool ' +
      'them but are rarely fooled. Because you easily ' +
      'see things for what they are, you get the lay ' +
      'of the land swiftly, size up threats and allies, ' +
      'and assess situations with accuracy. Perhaps ' +
      'you’re physically attractive, or maybe you use ' +
      'your wit to overcome any physical or mental ' +
      'imperfections.',
    benefits: CLEVER,
  },
];
