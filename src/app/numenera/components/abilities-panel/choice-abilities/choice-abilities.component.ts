import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ability } from 'src/app/numenera/model/ability.model';
import { AbilityService } from 'src/app/numenera/services/ability.service';
import { TypeService } from 'src/app/numenera/services/type.service';

@Component({
  selector: 'app-choice-abilities',
  templateUrl: './choice-abilities.component.html',
  styleUrls: ['./choice-abilities.component.css'],
})
export class ChoiceAbilitiesComponent implements OnInit, OnDestroy {
  abilities: Ability[] = [];
  private subs: Subscription[] = [];

  constructor(
    private typeService: TypeService,
    private abilityService: AbilityService
  ) {}

  ngOnInit(): void {
    this.subs.push(
      this.typeService.subToSelected().subscribe((type) => {
        this.abilities = [];
        if (type.name !== '') {
          type.choiceAbilities.forEach((ability) =>
            this.abilities.push(ability)
          );
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  showInfo(ability: Ability) {
    this.abilityService.setSelected(ability);
  }
}
