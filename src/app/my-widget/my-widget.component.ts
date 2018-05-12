import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-widget',
  template: `
    <h1>Number : <span>{{number}}</span></h1>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `,
  styles: [
    `span {
      color: mediumblue;
      font-weight: bold;
    }`
  ],
  encapsulation: ViewEncapsulation.Native
})
export class MyWidgetComponent {
  @Input() number = 0;
  @Output() change = new EventEmitter();

  increment() {
    ++this.number;
    this.change.emit(this.number);
  }

  decrement() {
    --this.number;
    this.change.emit(this.number);
  }
}
