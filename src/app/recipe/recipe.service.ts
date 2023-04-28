import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe-module";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    constructor(parameters) {}

    public recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test.',
        'https://live.staticflickr.com/65535/49483629426_e752f6138a_c.jpg'),
        new Recipe('Another Test Recipe','another test recipe.',
        'https://live.staticflickr.com/65535/49483629426_e752f6138a_c.jpg'),
    ];


    getRecipes() {
        return this.recipes.slice();
    }

}