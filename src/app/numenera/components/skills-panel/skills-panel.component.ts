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

  inabilities: Array<String> = [];
  trained: Array<String> = [];
  specialized: Array<String> = [];
  toChooseFrom: Array<SkillsToChoose> = [];

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe((character) => {
      this.updateSkills(character);
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
}
