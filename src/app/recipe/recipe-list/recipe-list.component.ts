import { Component, EventEmitter, OnInit } from '@angular/core';
import {Recipe} from '../recipe-module';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit{

  recipes: Recipe[];

  //public recipes: Recipe[] = [];

    constructor( private recipeService: RecipeService ){}

  ngOnInit(): any {
    this.recipes = this.recipeService.getRecipes();
  }

  

}
