import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Talent } from 'src/app/numenera/model/Type.model';
import { NumeneraCharacterService } from 'src/app/numenera/services/NumeneraCharacter.service';

@Component({
  selector: 'app-choice-abilities',
  templateUrl: './choice-abilities.component.html',
  styleUrls: ['./choice-abilities.component.scss'],
})
export class ChoiceAbilitiesComponent implements OnInit, OnDestroy {
  abilities: Talent[] = [];

  private subs: Subscription[] = [];

  private subscription!: Subscription;

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe((character) => {
      if (character.type) {
        character.type.talents.tiers.forEach(talent => {
          if (talent.level === 1) {
            this.abilities = talent.talents;
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
