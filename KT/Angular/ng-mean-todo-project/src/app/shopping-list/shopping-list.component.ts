import { Component, OnInit } from '@angular/core';
import { Ingredients } from './Ingredients.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [];
  constructor(private shoppingServ: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingServ.getAllIngr()
  }
}