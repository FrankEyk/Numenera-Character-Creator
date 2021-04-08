import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NumeneraCharacterService } from 'src/app/numenera/services/NumeneraCharacter.service';
@Component({
  selector: 'app-fixed-abilities',
  templateUrl: './fixed-abilities.component.html',
  styleUrls: ['./fixed-abilities.component.scss'],
})
export class FixedAbilitiesComponent implements OnInit, OnDestroy {
  abilities = [];

  private subscription!: Subscription;

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe((character) => {
      //TODO
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
