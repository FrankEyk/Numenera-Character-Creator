import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NumeneraCharacter } from '../../model/NumeneraCharacter.model';
import { SkillsToChoose } from '../../model/SkillsToChoose.model';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';

@Component({
  selector: 'app-skills-panel',
  templateUrl: './skills-panel.component.html',
  styleUrls: ['./skills-panel.component.scss'],
})
export class SkillsPanelComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  char?: NumeneraCharacter;

  inabilities: Array<String> = [];
  trained: Array<String> = [];
  specialized: Array<String> = [];
  toChooseFrom: Array<SkillsToChoose> = [];

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe((character) => {
      this.updateSkills(character);
      this.char = character;
    });
  }

  private updateSkills(character: NumeneraCharacter) {
    this.trained = character.trainedSkills;
    this.specialized = character.specializedSkills;
    this.inabilities = character.inabilitySkills;
    this.toChooseFrom = character.skillsToChooseFrom;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Removes the chosen skill from the list of skills to choose from, and 
   * updates the character.
   * @param skillToChoose The SkillToChoose from where to remove the skill.
   * @param skill The skill itself.
   */
  removeFromChoice(skillToChoose: SkillsToChoose, skill: string): void {
    const index = this.toChooseFrom.indexOf(skillToChoose);
    if (index >= 0) {
      const chosen = this.toChooseFrom[index];
      const i = chosen.skills.indexOf(skill);
      if (i >= 0) {
        chosen.skills.splice(i, 1);
        this.toChooseFrom.splice(index, 1);
        this.char?.addTrainedSkill(skill);
      }
    }
  }
}
