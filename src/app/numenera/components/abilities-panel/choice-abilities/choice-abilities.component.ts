import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/app/numenera/model/ability.model';

@Component({
  selector: 'app-choice-abilities',
  templateUrl: './choice-abilities.component.html',
  styleUrls: ['./choice-abilities.component.css']
})
export class ChoiceAbilitiesComponent implements OnInit {
  abilities: Ability[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
