import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ability } from 'src/app/numenera/model/Ability.model';

import { NumeneraCharacterService } from 'src/app/numenera/services/NumeneraCharacter.service';
@Component({
  selector: 'app-fixed-abilities',
  templateUrl: './fixed-abilities.component.html',
  styleUrls: ['./fixed-abilities.component.scss'],
})
export class FixedAbilitiesComponent implements OnInit, OnDestroy {

  abilities: Ability[] = [];

  private subscription!: Subscription;

  constructor(private readonly service: NumeneraCharacterService) { }

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe(character => {
      this.abilities = [];
      if (character.focus) {
        this.abilities.push(...character.focus.abilities);
      }
      if (character.type) {
        this.abilities.push(...character.type.abilities);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
