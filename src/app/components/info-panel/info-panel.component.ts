import { Component, OnDestroy, OnInit } from '@angular/core';
import { TypeService } from '../../services/type.service';
import { DescriptorService } from '../../services/descriptor.service';
import { Benefit } from '../../model/benefit.model';
import { FocusService } from '../../services/focus.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit, OnDestroy {
  selectedName = '';
  selectedDesc = '';
  benefits: Benefit[] = [];

  private subs: Subscription[] = [];

  constructor(private typeService: TypeService,
    private descService: DescriptorService,
    private focusService: FocusService) { }

  ngOnDestroy(): void {
    this.subs.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.subs.push(this.typeService.subToSelected().subscribe(type => {
      this.selectedName = type.name;
      this.selectedDesc = type.description;
      this.benefits = [];
    }));

    this.subs.push(this.descService.subToSelected().subscribe(desc => {
      this.selectedName = desc.name;
      this.selectedDesc = desc.description;
      this.benefits = desc.benefits;
    }));

    this.subs.push(this.focusService.subToSelected().subscribe(focus => {
      this.selectedName = focus.name;
      this.selectedDesc = focus.description;
      this.benefits = [];
    }));
  }

}