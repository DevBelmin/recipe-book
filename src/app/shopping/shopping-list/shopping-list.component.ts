import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../models/ingridient';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients : Ingridient[];
  
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingridients = this.shoppingService.getIngridients();

    this.shoppingService.onIngridientsChange.subscribe((ingridients: Ingridient[]) => {
      this.ingridients = ingridients;
    })
  }
}
