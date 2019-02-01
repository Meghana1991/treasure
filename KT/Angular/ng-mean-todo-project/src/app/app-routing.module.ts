import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UsersComponent } from './routing-example/users/users.component';
import { UserComponent } from './routing-example/users/user/user.component';
import { AuthGuard } from './auth-guard.service';
import { ServersComponent } from './routing-example/servers/servers.component';
import { ServerComponent } from './routing-example/servers/server/server.component';
import { EditServerComponent } from './routing-example/servers/edit-server/edit-server.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipesModule } from './recipes/recipe.module';
import { HomeComponent } from './routing-example/home/home.component';
import { WelcomePageComponent } from './core/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  /**
   * Lazy loading
   */
  // { path: 'recipes', loadChildren: './recipes/recipe.module#RecipesModule' },
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