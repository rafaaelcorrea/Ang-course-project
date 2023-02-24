import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.component';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatoes',10)
  ];

  constructor(){}

  ngOnInit(): any {
    
  }

  onIngredientAdded (ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
