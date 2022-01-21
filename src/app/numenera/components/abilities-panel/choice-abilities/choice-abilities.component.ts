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

  /**
   * Array with the Talents the user has chosen. Mainly used to revert a chosen ability.
   */
  chosenAbilities: Talent[] = [];
  amountToChoseFrom = 0;

  char?: NumeneraCharacter;

  reload = true;

  private subs: Subscription[] = [];

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnInit(): void {
    this.amountToChoseFrom = 2;
    this.chosenAbilities = [];
    this.subs.push(this.service.character$.subscribe((character) => {
      console.log(this.reload);
      if (character.type && this.reload) {
        this.char = character;
        this.amountToChoseFrom = 2;
        this.chosenAbilities = [];

        character.type.talents.tiers.forEach(talent => {
          if (talent.level === 1) {
            if (character.chosenAbilities !== talent.talents) {
              this.service.setChosenAbilities(talent.talents);
            }
          }
        });
      }
      this.reload = true;
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  removeFromChoice(talent: Talent): void {
    this.reload = false;
    this.amountToChoseFrom--;
    this.service.removeChosenAbility(talent);
    this.reload = false;
    this.service.addFixedAbility(talent);
    this.chosenAbilities.push(talent);
    console.log(this.chosenAbilities);
  }

  removeChosen(talent: Talent): void {
    const index = this.chosenAbilities.indexOf(talent);
    if (index >= 0) {
      this.reload = false;
      this.amountToChoseFrom++;
      this.service.removeFixedAbility(talent);
      this.reload = false;
      this.service.addChosenAbility(talent);
      this.chosenAbilities.splice(index, 1);
    }
  }
}
