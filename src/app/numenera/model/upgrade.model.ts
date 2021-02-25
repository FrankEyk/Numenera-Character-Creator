
/**
 * One Instruction for an upgrade.
 * For Example, type pool, effect intellect +2.
 */
export interface Upgrade {
  type: string;
  effect: string;
}

// DATA
export const PLUS_TWO_INT: Upgrade = {
  type : 'pool',
  effect : 'intellect +2'
};

export const INABLITY_STUDYING: Upgrade = {
  type : 'inability',
  effect : 'Studying or retaining facts'
};

export const INABLITY_RESIST_MENTAL_ATTACK: Upgrade = {
  type : 'inability',
  effect : 'Resisting mental attacks'
};

export const TRAINED_POSITIVE_SOCIAL_INTERACTIONS: Upgrade = {
  type : 'trained',
  effect : 'Positive or pleasant social interactions'
};

export const TRAINED_INFLUENCING_OTHERS_MINDS: Upgrade = {
  type : 'trained',
  effect : 'Using esoteries or abilities to influence the minds of others'
};

export const CONTACT_INFLUENTIAL_POSITION: Upgrade = {
  type : 'contact',
  effect : 'You have an important contact in a influential position.'
};

