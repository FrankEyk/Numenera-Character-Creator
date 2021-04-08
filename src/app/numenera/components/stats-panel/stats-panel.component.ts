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

  pool = {
    might: {
      current: 0,
      minimum: 0,
    },
    speed: {
      current: 0,
      minimum: 0,
    },
    intellect: {
      current: 0,
      minimum: 0,
    },
    pointsLeft: 6,
  };

  edge = {
    might: 0,
    speed: 0,
    intellect: 0,
  };

  isSelectionComplete = false;

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe((character) => {
      this.isSelectionComplete =
        character.type != undefined &&
        character.descriptor != undefined &&
        character.focus != undefined;

      if (!this.isSelectionComplete) {
        return;
      }

      character.type.attributes.forEach((attribute) => {
        switch (attribute.type) {
          case Attribute.INTELLECT:
            this.pool.intellect.minimum = attribute.value;
            break;
          case Attribute.MIGHT:
            this.pool.might.minimum = attribute.value;
            break;
          default:
          case Attribute.SPEED:
            this.pool.speed.minimum = attribute.value;
            break;
        }
      });
      //FIXME update logic is not working!
      character.pool.forEach((attribute) => {
        switch (attribute.type) {
          case Attribute.INTELLECT:
            this.pool.intellect.current = attribute.value;
            break;
          case Attribute.MIGHT:
            this.pool.might.current = attribute.value;
            break;
          default:
          case Attribute.SPEED:
            this.pool.speed.current = attribute.value;
            break;
        }
      });
      //FIXME update logic is not working!
      character.edge.forEach((edge) => {
        switch (edge.type) {
          case Attribute.INTELLECT:
            this.edge.intellect = edge.value;
            break;
          case Attribute.MIGHT:
            this.edge.might = edge.value;
            break;
          default:
          case Attribute.SPEED:
            this.edge.speed = edge.value;
            break;
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
