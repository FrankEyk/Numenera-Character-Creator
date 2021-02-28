import { AttributeType } from './Attribute.model';
import { Contact } from './Contact.model';
import { NumeneraCharacter } from './NumeneraCharacter.model';
import { Skill } from './Skill.model';

/** Upgrade strategy. */
export interface UpgradeStrategy {
  upgrade(character: NumeneraCharacter): void;
}

/** Pool Upgrades, increases or decreases specific attribute. */
export class PoolUpgradeStrategy implements UpgradeStrategy {
  /** Affected Attribute. */
  private attribute: AttributeType;
  /** Value to add or substract.*/
  private value: number;

  constructor(attribute: AttributeType, value: number) {
    this.attribute = attribute;
    this.value = value;
  }

  upgrade(character: NumeneraCharacter): void {
    character.attributes.forEach((a) => {
      if (a.type === this.attribute) {
        a.value += this.value;
      }
    });
  }
}

/** Modifies Character Skills. */
export class SkillUpgradeStratey implements UpgradeStrategy {
  private skill: Skill;

  constructor(skill: Skill) {
    this.skill = skill;
  }

  upgrade(character: NumeneraCharacter): void {
    character.skills.push(this.skill);
  }
}

/** Modifies Character contatcs. */
export class ContactUpgradeStrategy implements UpgradeStrategy {
  private contact: Contact;

  constructor(contact: Contact) {
    this.contact = contact;
  }

  upgrade(character: NumeneraCharacter): void {
    character.contacts.push(this.contact);
  }
}
