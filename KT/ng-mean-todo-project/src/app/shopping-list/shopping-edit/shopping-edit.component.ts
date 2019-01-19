import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from '../Ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  shoppingCartArr: Array<Ingredients>;
  @ViewChild('formAmt') formAmt: ElementRef;
  @Output() emitShoppingCart = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit() {
  }

  public addData(name) {
    const amt = this.formAmt.nativeElement.value;
    const newIngr = new Ingredients(name.value, amt);
    console.log(newIngr)
    this.emitShoppingCart.emit(newIngr);
  }
}