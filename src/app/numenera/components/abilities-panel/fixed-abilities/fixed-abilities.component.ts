import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ability } from 'src/app/numenera/model/Ability.model';
import { NumeneraCharacterService } from 'src/app/numenera/services/NumeneraCharacter.service';
@Component({
  selector: 'app-fixed-abilities',
  templateUrl: './fixed-abilities.component.html',
  styleUrls: ['./fixed-abilities.component.css'],
})
export class FixedAbilitiesComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  header = 'Fixed Abilites';
  abilities: Ability[] = [];
  typeAbilities: Ability[] = [];

  constructor(private readonly service: NumeneraCharacterService) { }

  ngOnInit(): void {
    this.subs.push(
      this.service.focus$.subscribe(focus => {
        this.abilities = [];
        if (focus.name !== '') {
          focus.abilities.forEach(ability => this.abilities.push(ability));
        }
      }));

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

  showInfo(ability: Ability): void {
    this.service.ability$.next(ability);
  }
}
