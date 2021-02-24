import { Component, OnDestroy, OnInit } from '@angular/core';
import { Benefit } from '../../model/benefit.model';
import { Subscription } from 'rxjs';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';

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

  constructor(private readonly service: NumeneraCharacterService) { }

  ngOnDestroy(): void {
    this.subs.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.subs.push(this.service.type$.subscribe(type => {
      this.selectedName = type.name;
      this.selectedDesc = type.description;
      this.benefits = [];
    }));

    this.subs.push(this.service.descriptor$.subscribe(desc => {
      this.selectedName = desc.name;
      this.selectedDesc = desc.description;
      this.benefits = desc.benefits;
    }));

    this.subs.push(this.service.focus$.subscribe(focus => {
      this.selectedName = focus.name;
      this.selectedDesc = focus.description;
      this.benefits = [];
    }));

    this.subs.push(this.service.ability$.subscribe(ability => {
      this.selectedName = ability.name;
      this.selectedDesc = ability.description;
      this.benefits = [];
    }));
  }

}
