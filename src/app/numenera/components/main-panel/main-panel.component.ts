import { Component, OnInit } from '@angular/core';
import { Type, TYPES } from '../../model/type.model';
import { DescriptorService } from '../../services/descriptor.service';
import { Descriptor } from '../../model/descriptor.model';
import { Focus } from '../../model/focus.model';
import { FocusService } from '../../services/focus.service';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements OnInit {
  charName = '';
  types: Type[] = TYPES;
  descriptors: Descriptor[] = [];

  foci: Focus[] = [];

  constructor(
    private readonly service: NumeneraCharacterService,
    private descService: DescriptorService,
    private focusService: FocusService
  ) { }

  ngOnInit(): void {
    this.descriptors = this.descService.descriptors;
    this.foci = this.focusService.foci;
  }

  onChangeType(e: any) {
    this.service.type$.next(e.value);
  }

  onChangeDesc(e: any) {
    this.descService.setSelected(e.value);
  }

  onChangeFocus(e: any) {
    this.focusService.setSelected(e.value);
  }
}
