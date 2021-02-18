import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ability } from 'src/app/numenera/model/ability.model';
import { FocusService } from 'src/app/numenera/services/focus.service';
import { TypeService } from 'src/app/numenera/services/type.service';

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
    private focusService: FocusService,
    private typeService: TypeService
  ) {}

  ngOnInit(): void {
    this.subs.push(
      this.focusService.subToSelected().subscribe((focus) => {
        this.abilities = [];
        if (focus.name !== '') {
          focus.abilities.forEach((ability) => this.abilities.push(ability));
        }
      })
    );

    this.subs.push(
      this.typeService.subToSelected().subscribe((type) => {
        this.typeAbilities = [];
        if (type.name !== '') {
          type.abilities.forEach((ability) => this.typeAbilities.push(ability));
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
