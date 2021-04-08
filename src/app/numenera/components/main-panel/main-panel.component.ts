import { Component } from '@angular/core';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';
import { MatSelectChange } from '@angular/material/select';
import { MasterdataService } from '../../services/Masterdata.service';
import { CharacterType } from '../../model/Type.model';
import { Focus } from '../../model/Focus.model';
import { Descriptor } from '../../model/Descriptor.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss'],
})
export class MainPanelComponent {
  name = '';
  type!: CharacterType;

  private subscription!: Subscription;

  constructor(
    readonly service: NumeneraCharacterService,
    readonly masterdata: MasterdataService
  ) {}

  onChangeName(name: string): void {
    this.service.name = name;
  }

  onChangeType(event: MatSelectChange): void {
    this.type = <CharacterType>event.value;
    this.service.type = this.type;
  }

  onChangeDesc(event: MatSelectChange): void {
    this.service.description = <Descriptor>event.value;
  }

  onChangeFocus(event: MatSelectChange): void {
    this.service.focus = <Focus>event.value;
  }
}
