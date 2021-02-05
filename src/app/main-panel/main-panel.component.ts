import { Component, OnInit } from '@angular/core';
import { TypeService } from '../services/type.service';
import { Type } from '../model/type.model';
import { DescriptorService } from '../services/descriptor.service';
import { Descriptor } from '../model/descriptor.model';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {
  charName = '';
  types: Type[] = [];
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

  constructor(private typeService: TypeService, private descService: DescriptorService) { }

  ngOnInit(): void {
    this.types = this.typeService.types;
    this.descriptors = this.descService.descriptors;
  }

  onChangeType(e: any) {
    this.typeService.setSelected(e.value);
  }

  onChangeDesc(e: any) {
    this.descService.setSelected(e.value);
  }

}
