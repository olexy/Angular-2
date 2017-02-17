import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <h2>
      another Works!
    </h2>
    <article>
      <ng-content></ng-content>
    </article>
  `,
  styles: [`
    h2 {
        color: red;
    }

     article {
        font-size: 16px;
        color: green;
        border: 1px solid black;
    }
  
  `]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
