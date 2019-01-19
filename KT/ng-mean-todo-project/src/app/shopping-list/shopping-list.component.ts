import { Component, OnInit } from '@angular/core';
import { Ingredients } from './Ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Besan',10),
    new Ingredients('Sugar',12),
    new Ingredients('Chilli',20),
    new Ingredients('Maida',22)
  ];
  constructor() { }

  ngOnInit() {
  }

  public addIngrToList(newIngr){
    this.ingredients.push(newIngr);
  }
}