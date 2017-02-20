import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []; //declaring recipe as class array type
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy Description', 'http://t15.deviantart.net/nR4UjG9pf5IPWebDjA4msPdlmkg=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre12/8174/th/pre/i/2014/357/2/f/slappy_the_dummy_by_ichaelbarnes-d8ayjb4.jpg')

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);

  }

}
