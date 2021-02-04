import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {
  charName = '';
  descriptors = ['Glaive', 'Nano', 'Jack'];
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
