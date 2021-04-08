import { Component, Input } from '@angular/core';
import { NumeneraCharacter } from 'src/app/numenera/model/NumeneraCharacter.model';

@Component({
  selector: 'app-type-info',
  templateUrl: './type-info.component.html',
  styleUrls: ['./type-info.component.scss']
})
export class TypeInfoComponent {

  @Input() character!: NumeneraCharacter;

  constructor() { }

}
