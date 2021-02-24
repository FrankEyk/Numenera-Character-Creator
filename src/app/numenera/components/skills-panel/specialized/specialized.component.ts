import { Component, OnInit } from '@angular/core';
import { Descriptor } from 'src/app/numenera/model/Descriptor.model';
import { NumeneraCharacterService } from 'src/app/numenera/services/NumeneraCharacter.service';

@Component({
  selector: 'app-specialized',
  templateUrl: './specialized.component.html',
  styleUrls: ['./specialized.component.css']
})
export class SpecializedComponent implements OnInit {

  skills: string[] = [];

  selectedDesc: Descriptor = {
    name: '',
    description: '',
    benefits: []
  };

  constructor(private readonly service: NumeneraCharacterService) { }

  ngOnInit(): void {
    this.service.descriptor$.subscribe( desc => {
      this.selectedDesc = desc;
      this.calculateSkills();
    });
  }

  calculateSkills(): void {
    this.skills = [];

    if (this.selectedDesc) {
      this.selectedDesc.benefits.forEach(benefit => {
        if (benefit.upgrade.type === 'specialized') {
          this.skills.push(benefit.upgrade.effect);
        };
      })
    }
  }

}
