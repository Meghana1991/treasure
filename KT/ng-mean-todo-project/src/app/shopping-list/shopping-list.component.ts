import { Component, OnInit } from '@angular/core';
import { Ingredients } from './Ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Besan'),
    new Ingredients('Sugar'),
    new Ingredients('Chilli'),
    new Ingredients('Maida')
  ];
  constructor() { }

  ngOnInit() {
  }
}