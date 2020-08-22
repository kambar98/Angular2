import { EventEmitter } from '@angular/core';
 
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test Recipe',
      'This is test',
      'https://secure.ce-tescoassets.com/assets/PL/108/5900512300108/ShotType1_540x540.jpg'
      , [
        new Ingredient('Milk', 1),
        new Ingredient('fat',20)
      ])
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
