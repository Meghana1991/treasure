import { Ingredients } from './Ingredients.model';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class ShoppingService {
    
    ingredients: Ingredients[] = [
        new Ingredients('Besan', 10),
        new Ingredients('Sugar', 12),
        new Ingredients('Chilli', 20),
        new Ingredients('Maida', 22)
    ];

    public addIngrToList(newIngr) {
        this.ingredients.push(newIngr);
    }

    public getAllIngr() {
        return this.ingredients;
    }
}