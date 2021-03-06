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

      //TODO add update
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onMightChanged(value: number): void {
    //TODO
  }

  onSpeedChanged(value: number): void {
    //TODO
  }

  onIntellectChanged(value: number): void {
    //TODO
  }

  onMightEdgeChanged(value: number): void {
    //TODO
  }

  onSpeedEdgeChanged(value: number): void {
    //TODO
  }

  onIntellectEdgeChanged(value: number): void {
    //TODO
  }
}
