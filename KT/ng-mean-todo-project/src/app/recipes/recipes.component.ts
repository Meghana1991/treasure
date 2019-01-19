import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes-list/recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedEvent: Recipe
  constructor() { }

  ngOnInit() {
  }

}