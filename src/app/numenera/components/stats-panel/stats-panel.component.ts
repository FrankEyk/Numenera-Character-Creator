import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AttributeType } from '../../model/Attribute.model';
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

      character.attributes.forEach((attribute) => {
        if (attribute.type === AttributeType.MIGHT) {
          this.might = attribute.value;
        } else if (attribute.type === AttributeType.SPEED) {
          this.speed = attribute.value;
        } else if (attribute.type === AttributeType.INTELLECT) {
          this.intellect = attribute.value;
        }
      });

      this.mightEdge = this.speedEdge = this.intellectEdge = 0;
      character.edge.forEach((edge) => {
        if (edge.type === AttributeType.MIGHT) {
          this.mightEdge = edge.value;
        } else if (edge.type === AttributeType.SPEED) {
          this.speedEdge = edge.value;
        } else if (edge.type === AttributeType.INTELLECT) {
          this.intellectEdge = edge.value;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onMightChanged(value: number): void {
    this.service.attribute = { type: AttributeType.MIGHT, value: value };
  }

  onSpeedChanged(value: number): void {
    this.service.attribute = { type: AttributeType.SPEED, value: value };
  }

  onIntellectChanged(value: number): void {
    this.service.attribute = { type: AttributeType.INTELLECT, value: value };
  }

  onMightEdgeChanged(value: number): void {
    this.service.edge = { type: AttributeType.MIGHT, value: value };
  }

  onSpeedEdgeChanged(value: number): void {
    this.service.edge = { type: AttributeType.SPEED, value: value };
  }

  onIntellectEdgeChanged(value: number): void {
    this.service.edge = { type: AttributeType.INTELLECT, value: value };
  }
}
