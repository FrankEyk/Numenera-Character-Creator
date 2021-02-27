import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Descriptor } from 'src/app/numenera/model/Descriptor.model';
import { ClassType, Type } from 'src/app/numenera/model/Type.model';
import { NumeneraCharacterService } from 'src/app/numenera/services/NumeneraCharacter.service';
@Component({
  selector: 'app-inability',
  templateUrl: './inability.component.html',
  styleUrls: ['./inability.component.scss'],
})
export class InabilityComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  skills: string[] = [];

  selectedDesc: Descriptor = {
    name: '',
    description: '',
    benefits: [],
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
    numberOfAbilitiesToChoose: 2,
  };

  private subscription!: Subscription;

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe((character) => {
      this.selectedDesc = character.descriptor;
      this.selectedType = character.type;
      this.calculateSkills();
    });
  }

  //TODO
  calculateSkills(): void {
    this.skills = [];

    if (this.selectedDesc && this.selectedDesc.name !== '') {
      this.selectedDesc.benefits.forEach((benefit) => {
        /*
        if (benefit.upgrade.type === 'inability') {
          this.skills.push(benefit.upgrade.effect);
        }
        */
      });
    }

    if (this.selectedType && this.selectedType.name !== '') {
      this.selectedType.upgrades.forEach((upgrade) => {
        if (upgrade.type === 'inability') {
          this.skills.push(upgrade.effect);
        }
      });
    }
  }
}
