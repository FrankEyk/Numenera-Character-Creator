import { Component, OnDestroy, OnInit } from '@angular/core';
import { Benefit } from '../../model/Benefit.model';
import { Subscription } from 'rxjs';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';
import { Type } from '../../model/Type.model';
import { Descriptor } from '../../model/Descriptor.model';
import { Focus } from '../../model/Focus.model';
import { Ability } from '../../model/Ability.model';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit, OnDestroy {

  name = 'Doe';
  type!: Type;
  descriptor!: Descriptor;
  focus!: Focus;
  ability!: Ability;

  selectedName = '';
  selectedDesc = '';
  benefits: Benefit[] = [];

  private subs: Subscription[] = [];

  constructor(private readonly service: NumeneraCharacterService) { }

  ngOnDestroy(): void {
    this.subs.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.subs.push(this.service.type$.subscribe(type => this.type = type));
    this.subs.push(this.service.name$.subscribe(name => this.name = name));
    this.subs.push(this.service.descriptor$.subscribe(descriptor => this.descriptor = descriptor));
    this.subs.push(this.service.focus$.subscribe(focus => this.focus = focus));
    this.subs.push(this.service.ability$.subscribe(ability => this.ability = ability));
  }

}
