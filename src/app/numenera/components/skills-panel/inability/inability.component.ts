import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Descriptor } from 'src/app/numenera/model/Descriptor.model';
import { ClassType, Type } from 'src/app/numenera/model/Type.model';
import { NumeneraCharacterService } from 'src/app/numenera/services/NumeneraCharacter.service';
@Component({
  selector: 'app-inability',
  templateUrl: './inability.component.html',
  styleUrls: ['./inability.component.css']
})
export class InabilityComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  skills: string[] = [];

  selectedDesc: Descriptor = {
    name: '',
    description: '',
    benefits: []
  };

  selectedType: Type = {
    name: '',
    description: '',
    classType: ClassType.GLAIVE,
    attributes: [],
    edge: [],
    upgrades: [],
    abilities: [],
    choiceAbilities: [],
    numberOfAbilitiesToChoose: 2
  };

  constructor(private readonly service: NumeneraCharacterService) { }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.subs.push(this.service.descriptor$.subscribe(desc => {
      this.selectedDesc = desc;
      this.calculateSkills();
    }));

    this.service.type$.subscribe(type => {
      this.selectedType = type;
      this.calculateSkills();
    });
  }

  calculateSkills() {
    this.skills = [];

    if (this.selectedDesc.name != '') {
      this.selectedDesc.benefits.forEach(benefit => {
        if (benefit.upgrade.type === 'inability') {
          this.skills.push(benefit.upgrade.effect);
        };
      })
    }

    if (this.selectedType.name !== '') {
      this.selectedType.upgrades.forEach(upgrade => {
        if (upgrade.type === 'inability') {
          this.skills.push(upgrade.effect);
        };
      });
    }
  }

}
