import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UsersComponent } from './routing-example/users/users.component';
import { UserComponent } from './routing-example/users/user/user.component';
import { AuthGuard } from './auth-guard.service';
import { ServersComponent } from './routing-example/servers/servers.component';
import { ServerComponent } from './routing-example/servers/server/server.component';
import { EditServerComponent } from './routing-example/servers/edit-server/edit-server.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, children: [
      // { path: 'recipe-item/:id', component: RecipesItemComponent },
      { path: '', component: RecipeStartComponent },
      { path: ':id', component: RecipesDetailComponent }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },
  // { path: 'users', component: UsersComponent },
  // { path: 'users/:id/:name', component: UserComponent },
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found !!' } },
  { path: '**', redirectTo: '/not-found' },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }