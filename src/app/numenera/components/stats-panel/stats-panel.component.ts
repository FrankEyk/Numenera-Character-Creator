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

  mightDisableAdd = false;
  speedDisableAdd = false;
  intDisableAdd = false;

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
      this.pool.intellect.current = character.intPool;
      this.pool.might.current = character.mightPool;
      this.pool.speed.current = character.speedPool;
      
      //FIXME update logic is not working!
      this.edge.intellect = character.intEdge;
      this.edge.might = character.mightEdge;
      this.edge.speed = character.speedEdge;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  mightChanged(newValue: number): void {
    if (this.pool.might.current < newValue) {
      this.pool.pointsLeft = this.pool.pointsLeft - 1;
    } else {
      this.pool.pointsLeft = this.pool.pointsLeft + 1;
    }

    this.pool.might.current = newValue;

    this.checkIfPointsLeft();
  }

  speedChanged(newValue: number): void {
    if (this.pool.speed.current < newValue) {
      this.pool.pointsLeft = this.pool.pointsLeft - 1;
    } else {
      this.pool.pointsLeft = this.pool.pointsLeft + 1;
    }

    this.pool.speed.current = newValue;

    this.checkIfPointsLeft();
  }

  intChanged(newValue: number): void {
    if (this.pool.intellect.current < newValue) {
      this.pool.pointsLeft = this.pool.pointsLeft - 1;
    } else {
      this.pool.pointsLeft = this.pool.pointsLeft + 1;
    }

    this.pool.intellect.current = newValue;

    this.checkIfPointsLeft();
  }  

  /**
   * Check if there are any points left to add to a pool.
   * If not, then disable all pool attributes, else enable them.
   */
  private checkIfPointsLeft(): void {
    if (this.pool.pointsLeft === 0) {
      this.mightDisableAdd = true;
      this.speedDisableAdd = true;
      this.intDisableAdd = true;
    } else {
      this.mightDisableAdd = false;
      this.speedDisableAdd = false;
      this.intDisableAdd = false;
    }
  }
}
