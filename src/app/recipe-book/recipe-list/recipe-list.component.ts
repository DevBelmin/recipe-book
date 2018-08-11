import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

   recipes: Recipe[] = [
     new Recipe('Test Recipe', 'This is a test description', 'https://pixabay.com/en/dishes-kitchen-bio-food-recipe-1175493/')
   ];

  constructor() { }

  ngOnInit() {
  }

}
