import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-panel',
  templateUrl: './stats-panel.component.html',
  styleUrls: ['./stats-panel.component.css']
})
export class StatsPanelComponent implements OnInit {
  headerMight = 'Might';
  headerSpeed = 'Speed';
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

  poolMightAdd() {
    this.might++;
  }

  poolMightRemove() {
    this.might--;
  }

  poolSpeedAdd() {
    this.speed++;
  }

  poolSpeedRemove() {
    this.speed--;
  }

  poolIntAdd() {
    this.intellect++;
  }

  poolIntRemove() {
    this.intellect--;
  }

  /** */

  edgeMightAdd() {
    this.mightEdge++;
  }

  edgeMightRemove() {
    this.mightEdge--;
  }

  edgeSpeedAdd() {
    this.speedEdge++;
  }

  edgeSpeedRemove() {
    this.speedEdge--;
  }

  edgeIntAdd() {
    this.intellectEdge++;
  }

  edgeIntRemove() {
    this.intellectEdge--;
  }

}
