import { Component, OnInit, Output } from '@angular/core';
import { Ingridient } from '../models/ingridient';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  newIngridientName: string;
  newIngridientAmount: string;
  @Output() onAdd: EventEmitter<Ingridient> = new EventEmitter();
  @Output() onDelete: EventEmitter<Ingridient> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addIngridient() {
    if (this.newIngridientName && this.newIngridientAmount) {
      this.onAdd.emit(new Ingridient(this.newIngridientName, parseInt(this.newIngridientAmount, 10)))
      this.clear();
    }
  }

  clear() {
    this.newIngridientName = '';
    this.newIngridientAmount = '';
  }

  delete() {
    this.onDelete.emit(new Ingridient(this.newIngridientName,parseInt(this.newIngridientAmount, 10)));
    this.clear();
  }

}
