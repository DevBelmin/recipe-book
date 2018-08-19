import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() activeRecipe: EventEmitter<Recipe> = new EventEmitter();

   recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  selectRecipe(selectedRecipe: Recipe) {
    this.recipeService.selectRecipe(selectedRecipe);
  }
}
