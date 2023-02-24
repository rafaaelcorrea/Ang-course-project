import { Component , EventEmitter, Input, Output} from '@angular/core';
import { Recipe } from '../../recipe-module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() recipe: Recipe;

  @Output() recipeSelected = new EventEmitter<Recipe>();


  constructor(){}

  onSelected(){
    this.recipeSelected.emit(this.recipe);
  }
}
