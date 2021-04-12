import { Descriptor } from './Descriptor.model';
import { Equipment } from './Equipment.model';
import { Focus } from './Focus.model';
import { Attribute, CharacterType } from './Type.model';
/**
 * Numenera Player Character Model.
 */
export class NumeneraCharacter {
  /** Character Name */
  name?: string;
  /** Character Type */
  private _type!: CharacterType;
  /** Character Description */
  private _descriptor!: Descriptor;
  /** Character Focus */
  focus?: Focus;
  /** Charater Attribute Pool */
  
  mightPool = 0;
  speedPool = 0;
  intPool = 0;

  /** Character Edges */
  mightEdge = 0;
  speedEdge = 0;
  intEdge = 0;
  /** Character Money. */
  shins = 0;
  /** Character Connections. */
  connections: Array<string> = [];
  /** Character Equiptment. */
  equipment: Array<Equipment> = [];
  /** Character Abilities */
  abilities: Array<string> = [];
  /** skills */
  trainedSkills: Array<String> = [];
  specializedSkills: Array<String> = [];
  inabilitySkills: Array<String> = [];
  /** Number of Cyphers the character can use without penalties */
  cypheruse = 0;
  /** Extra Notes */
  extraNotes: Array<String> = [];

  //TODO create models for abilities, connections

  set descriptor(descriptor: Descriptor) {
    this._descriptor = descriptor;
  }

  get descriptor(): Descriptor {
    return this._descriptor;
  }

  set type(type: CharacterType) {
    this._type = type;

    type.attributes.forEach(attribute => {
      if (attribute.type === Attribute.MIGHT) {
        this.mightPool = this.mightPool + attribute.value;
      } else if (attribute.type === Attribute.SPEED) {
        this.speedPool = this.speedPool + attribute.value;
      } else {
        this.intPool = this.intPool + attribute.value;
      }
    });

    type.edges.forEach(edge => {
      if (edge.type === Attribute.MIGHT) {
        this.mightEdge = edge.value;
      } else if (edge.type === Attribute.SPEED) {
        this.speedEdge = edge.value;
      } else {
        this.intEdge = edge.value;
      } 
    });
  }

  get type(): CharacterType {
    return this._type;
  }

  addInabilitySkill(skill: string): void {
    // TODO logic to remove from specialized/trained.
    this.inabilitySkills.push(skill);
  }

  addTrainedSkill(skill: string): void {
    this.inabilitySkills.forEach((iSkill, index) => {
      if (iSkill === skill) {
        console.log(skill + " is an inability. Remove as inability");
        this.inabilitySkills.splice(index, 1);
        return;
      }
    });

    this.trainedSkills.forEach((tSkill, index) => {
      if (tSkill === skill) {
        console.log(skill + " is already trained, trying to make specialized!");
        this.trainedSkills.splice(index, 1);
        this.specializedSkills.forEach(sSkill => {
          if (sSkill === skill) {
            console.log(skill + " is already specialized, don't add it.")
            // already in specialized, do nothing.
            return;
          }
        });

        console.log(skill + " is now specialized!");
        this.specializedSkills.push(skill);
        return;
      }
    })

    this.trainedSkills.push(skill);
  }
}
