/**
 * Represents a number of skills and how many the user can/must choose.
 */
export interface SkillsToChoose {

  /** The amount of choices the user has */
  numberOfChoices: number;
  /** The skills the user can choose from */
  skills: Array<string>;
  /** Description (optional) */
  description?: string;
}