import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../models/ingridient';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  newIngridientName: string;
  newIngridientAmount: string;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  addIngridient() {
    if (this.newIngridientName && this.newIngridientAmount) {
      this.shoppingService.addIngridient(
        new Ingridient(this.newIngridientName, parseInt(this.newIngridientAmount, 10))
      )
      this.clear();
    }
  }

  clear() {
    this.newIngridientName = '';
    this.newIngridientAmount = '';
  }

  deleteIngridient() {
    this.shoppingService.deleteIngridient(
      new Ingridient(this.newIngridientName,parseInt(this.newIngridientAmount, 10))
    );
    
    this.clear();
  }

}
