import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Descriptor } from 'src/app/numenera/model/Descriptor.model';
import { NumeneraCharacterService } from 'src/app/numenera/services/NumeneraCharacter.service';

@Component({
  selector: 'app-specialized',
  templateUrl: './specialized.component.html',
  styleUrls: ['./specialized.component.scss']
})
export class SpecializedComponent implements OnInit, OnDestroy {

  skills: string[] = [];

  selectedDesc: Descriptor = {
    name: '',
    description: '',
    benefits: []
  };

  private subscription!:Subscription;

  constructor(private readonly service: NumeneraCharacterService) { }

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe(character => {
      this.selectedDesc = character.descriptor;
      this.calculateSkills();
    });    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();  
  }

  //TODO
  calculateSkills(): void {
    this.skills = [];

    if (this.selectedDesc) {
      this.selectedDesc.benefits.forEach(benefit => {
        if (benefit.upgrade.type === 'specialized') {
          this.skills.push(benefit.upgrade.effect);
        }
      });
    }
  }

}
