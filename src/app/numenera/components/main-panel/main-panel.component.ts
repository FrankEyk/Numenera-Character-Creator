import { Component, OnInit } from '@angular/core';
import { Type, TYPES } from '../../model/Type.model';
import { DESCRIPTIONS, Descriptor } from '../../model/Descriptor.model';
import { FOCUS, Focus } from '../../model/Focus.model';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements OnInit {
  charName = '';

  types: Type[] = TYPES;
  descriptors: Descriptor[] = DESCRIPTIONS;
  foci: Focus[] = FOCUS;

  constructor(private readonly service: NumeneraCharacterService) { }

  ngOnInit(): void { }

  onChangeType(event: MatSelectChange): void {
    this.service.type$.next(event.value);
  }

  onChangeDesc(event: MatSelectChange): void {
    this.service.descriptor$.next(event.value);
  }

  onChangeFocus(event: MatSelectChange): void {
    this.service.focus$.next(event.value);
  }
}
