import { NumeneraCharacter } from './NumeneraCharacter.model';

/*
 * Function to upgrade the character.
 */
export interface Upgrade {
  (character: NumeneraCharacter): void;
}