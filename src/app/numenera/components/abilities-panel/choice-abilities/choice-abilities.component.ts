import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NumeneraCharacter } from 'src/app/numenera/model/NumeneraCharacter.model';
import { Talent } from 'src/app/numenera/model/Type.model';
import { NumeneraCharacterService } from 'src/app/numenera/services/NumeneraCharacter.service';

@Component({
  selector: 'app-choice-abilities',
  templateUrl: './choice-abilities.component.html',
  styleUrls: ['./choice-abilities.component.scss'],
})
export class ChoiceAbilitiesComponent implements OnInit, OnDestroy {
  abilities: Talent[] = [];
  chosenAbilities: Talent[] = [];
  amountToChoseFrom = 0;

  char?: NumeneraCharacter;

  private subs: Subscription[] = [];

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnInit(): void {
    this.subs.push(this.service.character$.subscribe((character) => {
      if (character.type) {
        this.amountToChoseFrom = 2;
        this.char = character;

        this.chosenAbilities = [];
        character.type.talents.tiers.forEach(talent => {
          if (talent.level === 1) {
            this.abilities = talent.talents;
          }
        });
      }    
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  removeFromChoice(talent: Talent): void {
    const index = this.abilities.indexOf(talent);
    if (index >= 0) {
      this.abilities.splice(index, 1);
      this.chosenAbilities.push(talent);
      this.char?.chosenAbilities.push(talent);
      this.amountToChoseFrom = this.amountToChoseFrom - 1;
    }
  }

  removeChosen(talent: Talent): void {
    const index = this.chosenAbilities.indexOf(talent);
    if (index >= 0) {
      this.chosenAbilities.splice(index, 1);
      this.abilities.push(talent);
      
      const chosenIndex = this.char?.chosenAbilities.indexOf(talent);
      if (index>=0) {
        this.char?.chosenAbilities.splice(index, 1);
      }

      this.amountToChoseFrom = this.amountToChoseFrom + 1;
    }
  }
}
