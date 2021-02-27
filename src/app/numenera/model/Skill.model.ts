export enum Proficiency {
  INABILITY = 0,
  TRAINED = 1,
  SPECIALIZED = 2,
}

export interface Skill {
  name: string;
  proficiency: Proficiency;
  effect: string;
}
