import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  @Input() header: string = '';
  @Input() value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
