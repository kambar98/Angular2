import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";



@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipeService) { }

    storeRecipes(){
      const recipes = this.recipesService.getRecipes();
      this.http.put('https://website-project-93b36.firebaseio.com/recipes.json', recipes)
        .subscribe(response => {
          console.log(response);
        })
    }
  }


