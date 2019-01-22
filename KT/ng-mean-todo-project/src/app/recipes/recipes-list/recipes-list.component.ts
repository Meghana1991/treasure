import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  // @Output() passEventToParent = new EventEmitter;
  constructor(private recipeServ: RecipeService) {
    console.log(this.recipes)
  }

  ngOnInit() {
    this.recipes = this.recipeServ.getRecipes();
  }

  // public recipeClicked(recipe) {
  //   this.passEventToParent.emit(recipe);
  // }
}