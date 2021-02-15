import { Component, OnInit } from '@angular/core';
import { Descriptor } from 'src/app/numenera/model/descriptor.model';
import { DescriptorService } from 'src/app/numenera/services/descriptor.service';

@Component({
  selector: 'app-trained',
  templateUrl: './trained.component.html',
  styleUrls: ['./trained.component.css']
})
export class TrainedComponent implements OnInit {

  skills: string[] = [];

  selectedDesc: Descriptor = {
    name: '',
    description: '',
    benefits: []
  };

  constructor(private descriptorService: DescriptorService) { }

  ngOnInit(): void {
    this.descriptorService.subToSelected().subscribe( desc => {
      this.selectedDesc = desc;
      this.calculateSkills();
    });
  }

  calculateSkills(): void {
    this.skills = [];

    if (this.selectedDesc) {
      this.selectedDesc.benefits.forEach(benefit => {
        if (benefit.upgrade.type === 'trained') {
          this.skills.push(benefit.upgrade.effect);
        };
      })
    }
  }

}
