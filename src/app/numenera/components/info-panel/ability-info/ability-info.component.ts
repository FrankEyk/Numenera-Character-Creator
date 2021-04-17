import { Component, Input } from '@angular/core';
import { NumeneraCharacter } from 'src/app/numenera/model/NumeneraCharacter.model';

@Component({
  selector: 'ability-info',
  templateUrl: './ability-info.component.html',
  styleUrls: ['./ability-info.component.scss']
})
export class AbilityInfoComponent {

  @Input() character!: NumeneraCharacter;

  constructor() { }

}
