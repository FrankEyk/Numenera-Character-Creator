import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../services/type.service';
import { Type } from '../../model/type.model';
import { DescriptorService } from '../../services/descriptor.service';
import { Descriptor } from '../../model/descriptor.model';
import { Focus } from '../../model/focus.model';
import { FocusService } from '../../services/focus.service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements OnInit {
  charName = '';
  types: Type[] = [];
  descriptors: Descriptor[] = [];

  foci: Focus[] = [];

  constructor(
    private typeService: TypeService,
    private descService: DescriptorService,
    private focusService: FocusService
  ) {}

  ngOnInit(): void {
    this.types = this.typeService.types;
    this.descriptors = this.descService.descriptors;
    this.foci = this.focusService.foci;
  }

  onChangeType(e: any) {
    this.typeService.setSelected(e.value);
  }

  onChangeDesc(e: any) {
    this.descService.setSelected(e.value);
  }

  onChangeFocus(e: any) {
    this.focusService.setSelected(e.value);
  }
}
