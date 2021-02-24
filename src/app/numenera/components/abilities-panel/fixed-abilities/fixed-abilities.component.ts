import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ability } from 'src/app/numenera/model/ability.model';
import { FocusService } from 'src/app/numenera/services/focus.service';
import { AbilityService } from 'src/app/numenera/services/ability.service';
import { NumeneraCharacterService } from 'src/app/numenera/services/NumeneraCharacter.service';
@Component({
  selector: 'app-fixed-abilities',
  templateUrl: './fixed-abilities.component.html',
  styleUrls: ['./fixed-abilities.component.css'],
})
export class FixedAbilitiesComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  header: string = 'Fixed Abilites';
  abilities: Ability[] = [];
  typeAbilities: Ability[] = [];

  constructor(
    private readonly service: NumeneraCharacterService,
    private focusService: FocusService,
    private abilityService: AbilityService
  ) { }

  ngOnInit(): void {
    this.subs.push(
      this.focusService.subToSelected().subscribe((focus) => {
        this.abilities = [];
        if (focus.name !== '') {
          focus.abilities.forEach((ability) => this.abilities.push(ability));
        }
      })
    );

    this.service.type$.subscribe(type => {
      this.typeAbilities = [];
      if (type.name !== '') {
        type.abilities.forEach((ability) => this.typeAbilities.push(ability));
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  showInfo(ability: Ability) {
    this.abilityService.setSelected(ability);
  }
}
