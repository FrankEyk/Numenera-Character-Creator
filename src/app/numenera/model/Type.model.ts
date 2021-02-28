import { Abilities, Ability } from './Ability.model';
import { Attribute, AttributeType, Edge } from './Attribute.model';
import { Proficiency, Skill } from './Skill.model';

/** Enumeration of Class Type. */
export enum ClassType {
  GLAIVE = 0,
  NANO = 1,
  JACKS = 2,
}

/** Character Type Description. */
export interface Type {
  name: string;
  classType: ClassType;
  attributes: Array<Attribute>;
  edge: Array<Edge>;
  skills: Array<Skill>;
  description: string;
  abilities: Ability[];
  choiceAbilities: Ability[];
  numberOfAbilitiesToChoose: number;
}

// DATA
/** Character Type Database. */
export const TYPES: Type[] = [
  {
    name: 'Glaive',
    classType: ClassType.GLAIVE,
    attributes: [
      { type: AttributeType.MIGHT, value: 11 },
      { type: AttributeType.SPEED, value: 10 },
      { type: AttributeType.INTELLECT, value: 7 },
    ],
    edge: [
      { type: AttributeType.MIGHT, value: 1 },
      { type: AttributeType.SPEED, value: 1 },
      { type: AttributeType.INTELLECT, value: 0 },
    ],
    skills: [
      {
        name: 'Crafting numenera',
        effect: 'Unable to craft numenera',
        proficiency: Proficiency.INABILITY,
      },
      {
        name: 'Salvaging numenera',
        effect: 'Unable to salvage numenera',
        proficiency: Proficiency.INABILITY,
      },
      {
        name: 'Understanding numenera',
        effect: 'Unable to understand numenera',
        proficiency: Proficiency.INABILITY,
      },
    ],
    description:
      'Glaives are the elite warriors of the Ninth World, ' +
      'using weapons and armor to fight their enemies. ' +
      'Hunters, guardians, and soldiers could be ' +
      'Glaives. Sometimes scouts, warlords, bandits, ' +
      'and even athletes are Glaives. “Glaive” is a ' +
      'common slang term used almost everywhere ' +
      'in the Steadfast and the Beyond for any person ' +
      'skilled with weapons or a martial art, but in truth, ' +
      'it applies only to the best of the best. Glaives ' +
      'are warriors who command abilities far beyond ' +
      'those of a typical person with a sword. ' +
      'Most Glaives are either strong (using the ' +
      'heaviest armor and weapons available and ' +
      'having a high Might) or fast (sticking ' +
      'with light weapons and armor and having ' +
      'a high Speed). A few attempt to use both ' +
      'Might and Speed and stay somewhere ' +
      'in the middle. Glaives also use ranged ' +
      'weapons such as bows or darts. Some ' +
      'don’t rely on weapons at all, preferring to ' +
      'use their bodies in hand-to-hand combat— ' +
      'punching, kicking, grabbing, throwing, and ' +
      'so on.',
    abilities: [Abilities.COMBAT_PROWESS, Abilities.TRAINED_IN_ARMOR],
    choiceAbilities: [
      Abilities.AGGRESSION,
      Abilities.FLEET_OF_FOOT,
      Abilities.IMPRESSIVE_DISPLAY,
      Abilities.MISDIRECT,
      Abilities.NO_NEED_FOR_WEAPONS,
      Abilities.TRAINED_WITHOUT_ARMOR,
    ],
    numberOfAbilitiesToChoose: 2,
  },
  {
    name: 'Nano',
    classType: ClassType.NANO,
    attributes: [],
    edge: [],
    description:
      'Nanos are sometimes called mages, wizards, ' +
      'sorcerers, or witches by the people of the ' +
      'Ninth World. Nano-sorcerer is also a common ' +
      'term, with their abilities referred to as nanosorcery. ' +
      'Some claim to be the representatives ' +
      'of gods or other supernatural agencies. ' +
      'Whatever they’re called, Nanos master the ' +
      'mysteries of the past to the degree that they ' +
      'seem to perform miracles. They tap into the ' +
      'numenera to alter reality or learn things that ' +
      'they couldn’t otherwise know. ' +
      'The term “Nano” is derived from the ' +
      'nanotechnology that is omnipresent throughout ' +
      'the Ninth World (whether anyone realizes it or ' +
      'not). Sometimes people call these invisible, ' +
      'numinous particles that infuse the landscape ' +
      'nano-spirits. Sometimes these spirits take on a ' +
      'devastating manifestation called the iron wind ' +
      'and move through the air in clouds, which can ' +
      'be far more dangerous than any conventional ' +
      'storm. In truth, nanites are literally everywhere. ' +
      'Nanos wield their power in the form of what ' +
      'they call esoteries, although some prefer to call ' +
      'them spells, enchantments, or charms. Nanos ' +
      'are proficient with other devices as well, and ' +
      'sometimes their powers are actually the subtle ' +
      'use of such items hidden upon their person. ' +
      'All Nanos call forth their power in slightly ' +
      'different ways. ' +
      'Typically, Nanos are intelligent, learned, ' +
      'and insightful. Most of the time, they devote ' +
      'themselves to the numenera and other ' +
      'esoterica rather than to purely physical pursuits. ' +
      'As a result, they’re often well versed in the ' +
      'artifacts and leftovers of the previous worlds.',
    skills: [],
    abilities: [],
    choiceAbilities: [],
    numberOfAbilitiesToChoose: 2,
  },
  {
    name: 'Jacks',
    classType: ClassType.JACKS,
    attributes: [],
    edge: [],
    description:
      'Jacks are intrepid explorers. They are jacks of all ' +
      'trades—hence the name—although the word also ' +
      'hearkens back to fables involving a wily, resourceful ' +
      'hero who always seems to be named Jack. Used as ' +
      'a verb, “to jack” means to steal, to deceive, or to ' +
      'get out of a tight scrape through ingenuity or luck. ' +
      'Jacks don’t use one skill or tactic exclusively; ' +
      'they use whatever weapons, armor, esoteries, ' +
      'or anything else might help them. They are ' +
      'hunters (particularly treasure hunters), con ' +
      'artists, skalds, rogues, scouts, and experts in a ' +
      'variety of fields.',
    skills: [],
    abilities: [],
    choiceAbilities: [],
    numberOfAbilitiesToChoose: 2,
  },
];
