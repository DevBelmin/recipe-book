import { Injectable, EventEmitter } from '@angular/core';
import { Ingridient } from './models/ingridient';
import { RecipeService } from '../recipe-book/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingridients: Ingridient[] = [];

  onIngridientsChange: EventEmitter<Ingridient[]> = new EventEmitter();

  constructor(private recipeService: RecipeService) {
  }

  getIngridients() : Ingridient[] {
    if (this.ingridients) {
      this.onIngridientsChange.emit(this.ingridients.slice());
      return this.ingridients.slice();
    }
  }

  addIngridient(ingridient: Ingridient, shouldEmit = true) {

    let index = this.ingridients.findIndex(ing => ing.name.toLocaleLowerCase() === ingridient.name.toLocaleLowerCase());

    if (index != -1) {
      this.ingridients[index].amount += ingridient.amount;
    }
    else {
      this.ingridients.push(ingridient);
    }

    this.onIngridientsChange.emit(this.ingridients.slice());
  }

  addIngridients(ingridients: Ingridient[]) {

    ingridients.forEach(element => {
      this.addIngridient(element, false)
    });
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
