import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  @Input() header: string = '';
  @Input() value: number = 0;

  @Output() addClicked: EventEmitter<string>;
  @Output() removeClicked: EventEmitter<string>;

  constructor() { 
    this.addClicked = new EventEmitter()
    this.removeClicked = new EventEmitter()
  }

  ngOnInit(): void {
  }

  add() {
    this.addClicked.emit();
  }

  remove() {
    this.removeClicked.emit();
  }

}
