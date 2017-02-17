import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
      <button (click)="onClicked()">Native Event Click me!</button>
      <button (click)="anotherClicked()">Custom Event Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();

  anotherClicked(){
    this.clicked.emit('Custom Event Worked')
  }

  onClicked() {
    alert('It worked!');
  }
}
