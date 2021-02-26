import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  @Input() header = '';
  @Input() value = 0;
  @Input() disable = false;

  @Output() addClicked: EventEmitter<string>;
  @Output() removeClicked: EventEmitter<string>;

  constructor() {
    this.addClicked = new EventEmitter();
    this.removeClicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  add() {
    if (!this.disable)
      {this.addClicked.emit();}
  }

  remove() {
    if (!this.disable)
      {this.removeClicked.emit();}
  }

}
