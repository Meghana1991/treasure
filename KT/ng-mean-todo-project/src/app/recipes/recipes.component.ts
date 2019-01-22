import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes-list/recipes.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedEvent: Recipe
  constructor(private recipeSer: RecipeService) { }

  ngOnInit() {
    this.recipeSer.recipeEventEmitter.subscribe(
      (recipe: Recipe) => {
        this.selectedEvent = recipe;
      }
    )
  }

}