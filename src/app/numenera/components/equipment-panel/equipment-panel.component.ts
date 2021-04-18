import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Equipment } from '../../model/Equipment.model';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';

@Component({
  selector: 'app-equipment-panel',
  templateUrl: './equipment-panel.component.html',
  styleUrls: ['./equipment-panel.component.scss']
})
export class EquipmentPanelComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  shins = 0;
  cyphers = 0;
  oddities = 0;

  equipment: Equipment[] = [];

  constructor(private readonly service: NumeneraCharacterService) { }

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe(
      (character) => {
        this.shins = character.shins
        this.cyphers = character.cypheruse;
        this.equipment = [...character.equipment];
        this.oddities = character.oddities;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
