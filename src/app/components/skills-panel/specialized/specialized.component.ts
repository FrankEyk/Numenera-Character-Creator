import { Component, OnInit } from '@angular/core';
import { Descriptor } from 'src/app/model/descriptor.model';
import { DescriptorService } from 'src/app/services/descriptor.service';

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

  constructor(private descriptorService: DescriptorService) { }

  ngOnInit(): void {
    this.descriptorService.subToSelected().subscribe( desc => {
      this.selectedDesc = desc;
      this.calculateSkills();
    });
  }

  calculateSkills() {
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
