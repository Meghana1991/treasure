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

@NgModule({
  declarations: [
    AppComponent, BasicComponent, HeaderComponent, RecipesComponent, RecipesListComponent, RecipesDetailComponent, RecipesItemComponent, ShoppingListComponent, ShoppingEditComponent, ChildComponent, Child2Component, Child3Component, Child4Component, BasicHighlightDirective, BetterHighlightDirective, BetterHighlightDirective2, BetterHighlightDirective3, StructuralDirective, DropDownDirective, Example1Component, ExampleChildComponent, AssignmentComponent, ActiveUsersComponent, InactiveUsersComponent, AssignmentSolutionComponent, InactiveUsersComponentOne, ActiveUsersComponentOne
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggerService,/*ModifyService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
