import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ability } from 'src/app/numenera/model/Ability.model';
import { NumeneraCharacterService } from 'src/app/numenera/services/NumeneraCharacter.service';

@Component({
  selector: 'app-choice-abilities',
  templateUrl: './choice-abilities.component.html',
  styleUrls: ['./choice-abilities.component.scss'],
})
export class ChoiceAbilitiesComponent implements OnInit, OnDestroy {
  abilities: Ability[] = [];
  private subs: Subscription[] = [];

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnInit(): void {
    this.subs.push(this.service.type$.subscribe(type => {
      this.abilities = [];
      if (type.name !== '') {
        type.choiceAbilities.forEach(ability => this.abilities.push(ability));
      }
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  showInfo(ability: Ability): void {
    this.service.ability$.next(ability);
  }
}
