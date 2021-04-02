import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';
import { NumeneraCharacter } from '../../model/NumeneraCharacter.model';
import { Attribute } from '../../model/Type.model';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss'],
})
export class InfoPanelComponent implements OnInit, OnDestroy {
  character!: NumeneraCharacter;

  private subscription!: Subscription;

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe(
      (character) => (this.character = character)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
