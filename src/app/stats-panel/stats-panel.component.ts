import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-panel',
  templateUrl: './stats-panel.component.html',
  styleUrls: ['./stats-panel.component.css']
})
export class StatsPanelComponent implements OnInit {
  might = 0;
  speed = 0;
  intellect = 0;

  mightEdge = 0;
  speedEdge = 0;
  intellectEdge = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
