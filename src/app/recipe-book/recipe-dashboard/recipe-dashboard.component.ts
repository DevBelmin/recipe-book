import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-dashboard',
  templateUrl: './recipe-dashboard.component.html',
  styleUrls: ['./recipe-dashboard.component.css']
})
export class RecipeDashboardComponent implements OnInit {

  recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onActiveRecipeChange(eventData: Recipe) {
    this.recipe = eventData;
  }

}
