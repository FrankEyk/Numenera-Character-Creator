import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
})
export class AttributeComponent implements OnInit {
  @Input()
  label?: string;

  @Input()
  max?: number;

  @Input()
  min?: number;

  @Input()
  value = 0;

  @Output()
  valueChanged = new EventEmitter<number>();

  ngOnInit(): void {
    if (this.min != undefined && this.value < this.min) {
      this.value = this.min;
    }
    if (this.max != undefined && this.value > this.max) {
      this.value = this.max;
    }
  }

  /**
   * Click Handler For add button.
   * Will Increase current value and emit the value.
   */
  onClickAdd(): void {
    if (this.max != undefined) {
      if (this.value + 1 > this.max) {
        return;
      }
    }

    this.value++;
    this.valueChanged.emit(this.value);
  }

  /**
   * Click Handler For remove button.
   * Will Decrease current value and emit the value.
   */
  onClickRemove(): void {
    if (this.min != undefined) {
      if (this.value - 1 < this.min) {
        return;
      }
    }

    this.value--;
    this.valueChanged.emit(this.value);
  }
}
