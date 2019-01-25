import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe;
  // @Output() itemClickedEvent = new EventEmitter
  id: number;
  constructor(private recipeServ: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  // public itemClicked() {
  //   this.recipeServ.recipeEventEmitter.emit(this.recipe);
  //   // this.itemClickedEvent.emit();
  // }
}