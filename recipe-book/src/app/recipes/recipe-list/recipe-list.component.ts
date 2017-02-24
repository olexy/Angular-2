import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.westridgebeef.com/wp-content/uploads/2013/09/Recipe-icon-3.png', []),
    new Recipe('AnotherRecipe', 'Good tastes', 'https://assets.materialup.com/uploads/710e2dd7-6b50-43a0-a3f5-5167a7e23d07/teaser.png', [])
  ]; //declaring recipe as class array type
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);

  }

}
