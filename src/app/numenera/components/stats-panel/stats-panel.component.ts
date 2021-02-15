import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-panel',
  templateUrl: './stats-panel.component.html',
  styleUrls: ['./stats-panel.component.css']
})
export class StatsPanelComponent implements OnInit {
  
  @Input()
  headerMight = 'Might';
  @Input()
  headerSpeed = 'Speed';
  @Input()
  headerInt = 'Intellect';

  might = 0;
  speed = 0;
  intellect = 0;

  mightEdge = 0;
  speedEdge = 0;
  intellectEdge = 0;

  constructor() { }

  ngOnInit(): void {
  }

  poolMightAdd(): void {
    this.might++;
  }

  poolMightRemove(): void {
    this.might--;
  }

  poolSpeedAdd(): void {
    this.speed++;
  }

  poolSpeedRemove(): void {
    this.speed--;
  }

  poolIntAdd(): void {
    this.intellect++;
  }

  poolIntRemove(): void {
    this.intellect--;
  }

  /** */

  edgeMightAdd(): void {
    this.mightEdge++;
  }

  edgeMightRemove(): void {
    this.mightEdge--;
  }

  edgeSpeedAdd(): void {
    this.speedEdge++;
  }

  edgeSpeedRemove(): void {
    this.speedEdge--;
  }

  edgeIntAdd(): void {
    this.intellectEdge++;
  }

  edgeIntRemove(): void {
    this.intellectEdge--;
  }

}
