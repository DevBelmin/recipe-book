import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../recipe.service';
import { ShoppingService } from '../../shopping/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe : Recipe) => {
        this.recipe = recipe;
    })
  }

  addToShopping() {
    if (this.recipe && this.recipe.ingridients) {
      this.shoppingService.addIngridients(this.recipe.ingridients);
    }
  }
}
