import { Component, OnInit } from '@angular/core';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';
import { MatSelectChange } from '@angular/material/select';
import { MasterdataService } from '../../services/Masterdata.service';
import { Type } from '../../model/Type.model';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements OnInit {

  name = '';
  type!: Type;

  constructor(
    readonly service: NumeneraCharacterService,
    readonly masterdata: MasterdataService) { }

  ngOnInit(): void { }

  onChangeName(name: string): void {
    this.service.name$.next(name);
  }

  onChangeType(event: MatSelectChange): void {
    this.type = event.value;
    this.service.type$.next(this.type);
  }

  onChangeDesc(event: MatSelectChange): void {
    this.service.descriptor$.next(event.value);
  }

  onChangeFocus(event: MatSelectChange): void {
    this.service.focus$.next(event.value);
  }
}
