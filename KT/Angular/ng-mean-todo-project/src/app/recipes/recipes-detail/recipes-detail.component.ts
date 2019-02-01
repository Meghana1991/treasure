import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes-list/recipes.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  id: number;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params)
        this.id = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipeById(this.id)
      }
    )
  }


}
