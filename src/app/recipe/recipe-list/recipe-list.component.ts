import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe-module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit{
  public recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test.',
    'https://live.staticflickr.com/65535/49483629426_e752f6138a_c.jpg'),
    new Recipe('A Test Recipe','This is simply a test.',
    'https://live.staticflickr.com/65535/49483629426_e752f6138a_c.jpg'),

  ];

    constructor(){}

  ngOnInit(): any {
    console.log(this.recipes);
  }
}
