import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BasicComponent } from './basics/basics.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight-1.directive';
import { BetterHighlightDirective2 } from './directives/better-highlight-2.directive';
import { BetterHighlightDirective3 } from './directives/better-highlight-3.directive';
import { StructuralDirective } from './directives/structural.directive';
import { DropDownDirective } from './directives/drop-down.directive';
import { Example1Component } from './component-service/example1/example1.component';
import { LoggerService } from './services/logger.service';
import { ExampleChildComponent } from './component-service/example1/example-child/example-child.component';
import { ModifyService } from './services/heirarchical.service';
import { AssignmentComponent } from './component-service/assignment/assignment.component';
import { ActiveUsersComponent } from './component-service/assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './component-service/assignment/inactive-users/inactive-users.component';
import { AssignmentSolutionComponent } from './component-service/assignment-solution/assignment-solution.component';
import { InactiveUsersComponentOne } from './component-service/assignment-solution/inactive-users/inactive-users1.component';
import { ActiveUsersComponentOne } from './component-service/assignment-solution/active-users/active-users1.component';
import { RoutingExample } from './routing-example/routing-example.component';
import { EditServerComponent } from './routing-example/servers/edit-server/edit-server.component';
import { HomeComponent } from './routing-example/home/home.component';
import { ServerComponent } from './routing-example/servers/server/server.component';
import { ServersComponent } from './routing-example/servers/servers.component';
import { UsersComponent } from './routing-example/users/users.component';
import { UserComponent } from './routing-example/users/user/user.component';
import { ServersService } from './routing-example/servers/servers.service';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestvariablesComponent } from './testvariables/testvariables.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes = [
  { path: '', component: HomeComponent },
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
  { path: 'not-found', component: ErrorPageComponent , data : {message : 'Page not found !!'}},
  { path: '**', redirectTo: '/not-found' },

]
@NgModule({
  declarations: [
    AppComponent, BasicComponent, HeaderComponent, RecipesComponent, RecipesListComponent, RecipesDetailComponent, RecipesItemComponent, ShoppingListComponent, ShoppingEditComponent, ChildComponent, Child2Component, Child3Component, Child4Component, BasicHighlightDirective, BetterHighlightDirective, BetterHighlightDirective2, BetterHighlightDirective3, StructuralDirective, DropDownDirective, Example1Component, ExampleChildComponent, AssignmentComponent, ActiveUsersComponent, InactiveUsersComponent, AssignmentSolutionComponent, InactiveUsersComponentOne, ActiveUsersComponentOne, RoutingExample, HomeComponent, EditServerComponent, ServerComponent, ServersComponent, UsersComponent, UserComponent, PageNotFoundComponent, TestvariablesComponent, ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggerService,/*ModifyService*/, ServersService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
