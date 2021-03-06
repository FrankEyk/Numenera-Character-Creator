import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Attribute } from '../../model/Type.model';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';

@Component({
  selector: 'app-stats-panel',
  templateUrl: './stats-panel.component.html',
  styleUrls: ['./stats-panel.component.scss'],
})
export class StatsPanelComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  might = 0;
  speed = 0;
  intellect = 0;

  mightEdge = 0;
  speedEdge = 0;
  intellectEdge = 0;

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe((character) => {
      this.might = this.speed = this.intellect = 0;
      //UPDATE POOL
      character.pool.forEach((attribute) => {
        if (attribute.type === Attribute.INTELLECT) {
          this.intellect = attribute.value;
        }
        if (attribute.type === Attribute.MIGHT) {
          this.might = attribute.value;
        }
        if (attribute.type === Attribute.SPEED) {
          this.speed = attribute.value;
        }
      });
      //UPDATE EDGE
      character.edge.forEach((attribute) => {
        if (attribute.type === Attribute.INTELLECT) {
          this.intellectEdge = attribute.value;
        }
        if (attribute.type === Attribute.MIGHT) {
          this.mightEdge = attribute.value;
        }
        if (attribute.type === Attribute.SPEED) {
          this.speedEdge = attribute.value;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onMightChanged(value: number): void {
    this.service.attribute = { type: Attribute.MIGHT, value: value };
  }

  onSpeedChanged(value: number): void {
    this.service.attribute = { type: Attribute.SPEED, value: value };
  }

  onIntellectChanged(value: number): void {
    this.service.attribute = { type: Attribute.INTELLECT, value: value };
  }

  onMightEdgeChanged(value: number): void {
    this.service.edge = { type: Attribute.MIGHT, value: value };
  }

  onSpeedEdgeChanged(value: number): void {
    this.service.edge = { type: Attribute.SPEED, value: value };
  }

  onIntellectEdgeChanged(value: number): void {
    this.service.edge = { type: Attribute.INTELLECT, value: value };
  }
}
