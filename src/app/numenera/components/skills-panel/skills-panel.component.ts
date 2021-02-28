import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Proficiency, Skill } from '../../model/Skill.model';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';

@Component({
  selector: 'app-skills-panel',
  templateUrl: './skills-panel.component.html',
  styleUrls: ['./skills-panel.component.scss'],
})
export class SkillsPanelComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  inabilities = Array<Skill>();
  trained = Array<Skill>();
  specialized = Array<Skill>();

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe((character) => {
      this.inabilities = character.skills.filter(
        (skill) => skill.proficiency === Proficiency.INABILITY
      );
      this.trained = this.inabilities = character.skills.filter(
        (skill) => skill.proficiency === Proficiency.TRAINED
      );
      this.specialized = this.inabilities = character.skills.filter(
        (skill) => skill.proficiency === Proficiency.SPECIALIZED
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
