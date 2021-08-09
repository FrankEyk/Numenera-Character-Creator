import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
    pointsLeft: 0,
  };

  mightDisableAdd = false;
  speedDisableAdd = false;
  intDisableAdd = false;

  mightEdgeDisableAdd = false;
  speedEdgeDisableAdd = false;
  intEdgeDisableAdd = false;

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

      this.pool.pointsLeft = 6;
      this.edge.pointsLeft = character.edgePointsToAdd;

      //FIXME update logic is not working!
      this.pool.intellect.current = character.intPool;
      this.pool.might.current = character.mightPool;
      this.pool.speed.current = character.speedPool;
      
      this.pool.intellect.minimum = character.intPool;
      this.pool.might.minimum = character.mightPool;
      this.pool.speed.minimum = character.speedPool;
      
      //FIXME update logic is not working!
      this.edge.intellect.current = character.intEdge;
      this.edge.might.current = character.mightEdge;
      this.edge.speed.current = character.speedEdge;

      this.edge.intellect.minimum = character.intEdge;
      this.edge.might.minimum = character.mightEdge;
      this.edge.speed.minimum = character.speedEdge;

      this.checkIfPointsLeft();
      this.checkIfEdgePointsLeft();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  mightChanged(newValue: number): void {
    console.log('might '+ newValue);
    this.poolChanged(newValue, this.pool.might.current);

    this.pool.might.current = newValue;

    this.checkIfPointsLeft();
  }

  speedChanged(newValue: number): void {
    this.poolChanged(newValue, this.pool.speed.current);

    this.pool.speed.current = newValue;

    this.checkIfPointsLeft();
  }

  intChanged(newValue: number): void {
    this.poolChanged(newValue, this.pool.intellect.current);

    this.pool.intellect.current = newValue;

    this.checkIfPointsLeft();
  }

  private poolChanged(newValue: number, subjectToChange: number) {
    if (subjectToChange < newValue) {
      this.pool.pointsLeft = this.pool.pointsLeft - 1;
    } else {
      this.pool.pointsLeft = this.pool.pointsLeft + 1;
    }
  }
  
  mightEdgeChanged(newValue: number): void {
    this.edgeChanged(newValue, this.edge.might.current);

    this.edge.might.current = newValue;

    this.checkIfEdgePointsLeft();
  }
  
  speedEdgeChanged(newValue: number): void {
    this.edgeChanged(newValue, this.edge.speed.current);

    this.edge.speed.current = newValue;

    this.checkIfEdgePointsLeft();
  }
  
  intEdgeChanged(newValue: number): void {
    this.edgeChanged(newValue, this.edge.intellect.current);

    this.edge.intellect.current = newValue;

    this.checkIfEdgePointsLeft();
  }

  private edgeChanged(newValue: number, subjectToChange: number): void {
    if (subjectToChange < newValue) {
      this.edge.pointsLeft = this.edge.pointsLeft - 1;
    } else {
      this.edge.pointsLeft = this.edge.pointsLeft + 1;
    }
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

  /**
   * Check if there are any points left to add to an edge.
   * If not, then disable all edge attributes, else enable them.
   */
  private checkIfEdgePointsLeft(): void {
    if (this.edge.pointsLeft === 0) {
      this.mightEdgeDisableAdd = true;
      this.speedEdgeDisableAdd = true;
      this.intEdgeDisableAdd = true;
    } else {
      this.mightEdgeDisableAdd = false;
      this.speedEdgeDisableAdd = false;
      this.intEdgeDisableAdd = false;
    }
  }
}
