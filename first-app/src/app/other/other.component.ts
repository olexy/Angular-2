import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-other',
  template: `
    <article>
      <ng-content></ng-content>
    </article>
    `,
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
