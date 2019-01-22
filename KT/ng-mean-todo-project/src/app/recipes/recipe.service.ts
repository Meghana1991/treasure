import { Recipe } from './recipes-list/recipes.model';
import { Injectable, EventEmitter } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipeEventEmitter = new EventEmitter;
    public recipes: Recipe[] = [
        new Recipe('Mushroom', 'My favorite', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-aXgm9u6NAFepm78simxI9QIeZCB4OdFhVKpUNhAqwBKyi7N'),
        new Recipe('Corn', 'favorite', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-aXgm9u6NAFepm78simxI9QIeZCB4OdFhVKpUNhAqwBKyi7N')
    ];

    public getRecipes() {
        // return this.recipes; //any modification for recipes will modify the actual one
        return this.recipes.slice(); //using slice() with no args it will create copy of this array
    }

    public  getRecipeSelected(id) {
        return this.recipes[id];
    }
}