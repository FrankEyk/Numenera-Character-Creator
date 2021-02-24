import { Component, OnInit } from '@angular/core';
import { Type, TYPES } from '../../model/type.model';
import { DescriptorService } from '../../services/descriptor.service';
import { Descriptor } from '../../model/descriptor.model';
import { FOCUS, Focus } from '../../model/focus.model';
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
  descriptors: Descriptor[] = [];

  foci: Focus[] = FOCUS;

  constructor(
    private readonly service: NumeneraCharacterService,
    private descService: DescriptorService,
  ) { }

  ngOnInit(): void {
    this.descriptors = this.descService.descriptors;
  }

  onChangeType(event: MatSelectChange): void {
    this.service.type$.next(event.value);
  }

  onChangeDesc(event: MatSelectChange): void {
    this.descService.setSelected(event.value);
  }

  onChangeFocus(event: MatSelectChange): void {
    this.service.focus$.next(event.value);
  }
}
