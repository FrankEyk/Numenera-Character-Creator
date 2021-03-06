import { Component } from '@angular/core';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';
import { MatSelectChange } from '@angular/material/select';
import { MasterdataService } from '../../services/Masterdata.service';
import { Type } from '../../model/Type.model';
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
  type!: Type;

  private subscription!: Subscription;

  constructor(
    readonly service: NumeneraCharacterService,
    readonly masterdata: MasterdataService
  ) {}

  onChangeName(name: string): void {
    this.service.name = name;
  }

  onChangeType(event: MatSelectChange): void {
    this.type = <Type>event.value;
    this.service.type = this.type;
  }

  onChangeDesc(event: MatSelectChange): void {
    this.service.descriptor = <Descriptor>event.value;
  }

  onChangeFocus(event: MatSelectChange): void {
    this.service.focus = <Focus>event.value;
  }
}
