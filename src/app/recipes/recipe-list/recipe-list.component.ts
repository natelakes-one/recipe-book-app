import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test', 'https://media1.agfg.com.au/images/listing/73901/hero-400.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test', 'https://cdn.stocksnap.io/img-thumbs/960w/pizza-food_R926LU1YEA.jpg')
  ];
  
}
