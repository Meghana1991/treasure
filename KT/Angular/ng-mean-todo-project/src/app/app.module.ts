import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BasicComponent } from './basics/basics.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight-1.directive';
import { BetterHighlightDirective2 } from './directives/better-highlight-2.directive';
import { BetterHighlightDirective3 } from './directives/better-highlight-3.directive';
import { StructuralDirective } from './directives/structural.directive';
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
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipesModule } from './recipes/recipe.module';
import { SharedModule } from './shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent, BasicComponent, ChildComponent, Child2Component, Child3Component, Child4Component, BasicHighlightDirective, BetterHighlightDirective, BetterHighlightDirective2, BetterHighlightDirective3, StructuralDirective, Example1Component, ExampleChildComponent, AssignmentComponent, ActiveUsersComponent, InactiveUsersComponent, AssignmentSolutionComponent, InactiveUsersComponentOne, ActiveUsersComponentOne, RoutingExample, EditServerComponent, ServerComponent, ServersComponent, UsersComponent, UserComponent, PageNotFoundComponent, TestvariablesComponent, ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RecipesModule,
    AppRoutingModule,
    ShoppingListModule,
    SharedModule,
    CoreModule
  ],
  // move all the providers to the core module
  // providers: [LoggerService,/*ModifyService*/, ServersService, AuthService, AuthGuard],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
