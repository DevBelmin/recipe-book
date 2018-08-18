import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../models/ingridient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients : Ingridient[] = [];
  newIngridientName: string;
  newIngridientAmount: string;

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

  addIngridient() {
    if (this.newIngridientName && this.newIngridientAmount) {
      this.ingridients.push(new Ingridient(this.newIngridientName, parseInt(this.newIngridientAmount, 10)));
      this.clear();
    }
  }

  clear() {
    this.newIngridientName = '';
    this.newIngridientAmount = '';
  }

  delete() {
    if (this.newIngridientName) {

      let index = this.ingridients.findIndex(el => el.name.toLocaleLowerCase() === this.newIngridientName.toLocaleLowerCase());

      if (index != -1) {
        let value = parseInt(this.newIngridientAmount, 10);

        if (this.newIngridientAmount && this.ingridients[index].amount > value) {
          this.ingridients[index].amount = this.ingridients[index].amount -  value;
        }
        else {
          this.ingridients.splice(index, 1);
        }
      }
    }

    this.clear();
  }
}
