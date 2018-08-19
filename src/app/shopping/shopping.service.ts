import { Injectable, EventEmitter } from '@angular/core';
import { Ingridient } from './models/ingridient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingridients: Ingridient[];

  onIngridientsChange: EventEmitter<Ingridient[]> = new EventEmitter();

  constructor() { 
    if (!("ingridients" in localStorage)) {

      this.ingridients = [
        new Ingridient("Apple", 14),
        new Ingridient("Tomatoes", 2),
        new Ingridient("Bananas", 1),
      ];

      localStorage.setItem("ingridients", JSON.stringify(this.ingridients));
    }
    else {
      this.ingridients =  JSON.parse(localStorage.getItem("ingridients"));
    }
    this.onIngridientsChange.emit(this.ingridients.slice());
  }

  getIngridients() : Ingridient[] {
    this.onIngridientsChange.emit(this.ingridients.slice());
    return this.ingridients.slice();
  }

  addIngridient(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
    this.onIngridientsChange.emit(this.ingridients.slice());
  }

  deleteIngridient(ingridient: Ingridient) {
    if (ingridient.name) {

      let index = this.ingridients.findIndex(el => el.name.toLocaleLowerCase() === ingridient.name.toLocaleLowerCase());

      if (index != -1) {

        if (ingridient.amount && this.ingridients[index].amount > ingridient.amount) {
          this.ingridients[index].amount = this.ingridients[index].amount -  ingridient.amount;
        }
        else {
          this.ingridients.splice(index, 1);
        }
      }
      this.onIngridientsChange.emit(this.ingridients.slice());
    }
  }
}
