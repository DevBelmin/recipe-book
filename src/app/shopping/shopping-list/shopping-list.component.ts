import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../models/ingridient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients : Ingridient[] = [];
  
  constructor() { }

  ngOnInit() {

    if (!("ingridients" in localStorage)) {

      let ingridients: Ingridient[] = [
        new Ingridient("Apple", 14),
        new Ingridient("Tomatoes", 2),
        new Ingridient("Bananas", 1),
      ];

      this.ingridients.push(...ingridients);

      localStorage.setItem("ingridients", JSON.stringify(ingridients));
    }
    else {
      this.ingridients =  JSON.parse(localStorage.getItem("ingridients"));
    }
  }

  addIngridient(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
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
    }
  }
}
