import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';

const recipeRoutes: Routes = [
    {
        path: 'recipes', component: RecipesComponent, children: [
            // { path: 'recipe-item/:id', component: RecipesItemComponent },
            { path: '', component: RecipeStartComponent },
            { path: ':id', component: RecipesDetailComponent }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule]
})

export class RecipesRoutingModule { }