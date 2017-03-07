import { Injectable } from '@angular/core';

import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.westridgebeef.com/wp-content/uploads/2013/09/Recipe-icon-3.png', []),
    new Recipe('AnotherRecipe', 'Good tastes', 'https://assets.materialup.com/uploads/710e2dd7-6b50-43a0-a3f5-5167a7e23d07/teaser.png', [])
  ]; //declaring recipe as class array type

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
