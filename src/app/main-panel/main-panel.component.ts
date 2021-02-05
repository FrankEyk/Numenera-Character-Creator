import { Component, OnInit } from '@angular/core';
import { DescriptorService } from '../descriptor-service.service';
import { Descriptor } from '../model/description.model';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {
  charName = '';
  descriptors: Descriptor[] = [];

  foci = ['Bears a Halo of Fire',
  'Commands Mental Powers',
  'Controls Beasts',
  'Controls Gravity',
  'Crafts Illusions',
  'Employs Magnetism',
  'Entertains',
  'Exists Partially Out of Phase',
  'Explores Dark Places',
  'Fights With Panache',
  'Focuses Mind Over Matter',
  'Fuses Flesh and Steel',
  'Howls at the Moon',
  'Hunts',
  'Lives in the Wilderness',
  'Masters Defense',
  'Masters Weaponry',
  'Murders',
  'Rages',
  'Rides the Lightning',
  'Speaks With a Silver Tongue',
  'Talks to Machines',
  'Wears a Sheen of Ice',
  'Wields Power With Precision',
  'Wields Two Weapons at Once',
  'Works the Back Alleys',
  'Works Miracles',
  ]

  constructor(private descriptorService: DescriptorService) { }

  ngOnInit(): void {
    this.descriptors = this.descriptorService.descriptors;
  }

  onChangeDesc(e: any) {
    this.descriptorService.setSelected(e.value);
  }

}
