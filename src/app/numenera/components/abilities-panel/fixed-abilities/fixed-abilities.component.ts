import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ability } from 'src/app/numenera/model/ability.model';
import { FocusService } from 'src/app/numenera/services/focus.service';

@Component({
  selector: 'app-fixed-abilities',
  templateUrl: './fixed-abilities.component.html',
  styleUrls: ['./fixed-abilities.component.css']
})
export class FixedAbilitiesComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  @Input() header: string = '';

  abilities: Ability[] = [];

  constructor(private focusService: FocusService) { }

  ngOnInit(): void {
    this.focusService.subToSelected().subscribe(focus => {
      this.abilities = [];
      if (focus.name !== '') {
        focus.abilities.forEach(ability => this.abilities.push(ability));
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
