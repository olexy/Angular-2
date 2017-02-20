import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe; //create recipe of type Recipe class & @input means to get from outside ==> recipe-list-component
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
