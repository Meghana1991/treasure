import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Mushroom', 'My favorite', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-aXgm9u6NAFepm78simxI9QIeZCB4OdFhVKpUNhAqwBKyi7N'),
    new Recipe('Corn', 'favorite', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-aXgm9u6NAFepm78simxI9QIeZCB4OdFhVKpUNhAqwBKyi7N')
  ];
  @Output() passEventToParent = new EventEmitter;
  constructor() {
    console.log(this.recipes)
  }

  ngOnInit() {
  }

  public recipeClicked(recipe) {
    this.passEventToParent.emit(recipe);
  }
}