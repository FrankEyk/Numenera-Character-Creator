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

  private subscription!: Subscription;

  constructor(private readonly service: NumeneraCharacterService) { }

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe(character => {
      if (character.type) {
        this.abilities = character.type.choiceAbilities;
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
