import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';

@Component({
  selector: 'app-skills-panel',
  templateUrl: './skills-panel.component.html',
  styleUrls: ['./skills-panel.component.scss'],
})
export class SkillsPanelComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  inabilities: string[] = [];
  trained: string[] = [];
  specialized = [];

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe((character) => {
      //TODO
      this.reset();

      if (character.descriptor) {
        const desc = character.descriptor;
        desc.benefits.forEach(benefit => {
          console.log(benefit.name);
          if (benefit.name === 'Skill') {
            this.trained.push(benefit.description);
          } else if (benefit.name === 'Inability') {
            this.inabilities.push(benefit.description);
          }
        });
      }
    });
  }

  private reset(): void {
    this.inabilities = [];
    this.trained = [];
    this.specialized = [];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
