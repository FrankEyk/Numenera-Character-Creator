import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Descriptor } from 'src/app/numenera/model/descriptor.model';
import { ClassType, Type } from 'src/app/numenera/model/type.model';
import { DescriptorService } from 'src/app/numenera/services/descriptor.service';
import { TypeService } from 'src/app/numenera/services/type.service';

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
    upgrades: [],
    abilities: [],
    choiceAbilities: [],
    numberOfAbilitiesToChoose: 2
  };

  constructor(
    private descriptorService: DescriptorService,
    private typeService: TypeService) { }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.subs.push( this.descriptorService.subToSelected().subscribe( desc => {
      this.selectedDesc = desc;
      this.calculateSkills();
    }));

    this.subs.push( this.typeService.subToSelected().subscribe( type => {
      this.selectedType = type;
      this.calculateSkills();
    }));
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
      this.selectedType.upgrades.forEach( upgrade => {
        if (upgrade.type === 'inability') {
          this.skills.push(upgrade.effect);
        };
      });
    }
  }

}
