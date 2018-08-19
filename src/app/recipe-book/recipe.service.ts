import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from './models/recipe';
import { Ingridient } from '../shopping/models/ingridient';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {

  constructor() { }

  selectedRecipe: EventEmitter<Recipe> = new EventEmitter();

  private recipes: Recipe[] =  [
    new Recipe(
      'Good Old Fashioned Pancakes',
      [
        'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
        'Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
      ],
      'https://images.media-allrecipes.com/userphotos/720x405/4948036.jpg',
      [
        new Ingridient('cup all-purpose flour', 1/2),
        new Ingridient('teaspoon baking powder', 1/2),
        new Ingridient('teaspoon salt', 1),
        new Ingridient('tablespoon white sugar', 1/4),
        new Ingridient('cup of milk', 1),
        new Ingridient('egg', 1),
        new Ingridient('tablespoon butter, melted', 3)
      ]
    ),
    new Recipe(
      'On-the-Farm Scrambled Eggs',
      [
        'Whisk eggs, half-and-half, salt, and pepper together in a bowl. Whisk in goat cheese and chives.',
        'Melt butter in a skillet over medium-high heat. Pour in egg mixture; cook, stirring occasionally, until set, about 5 minutes. Transfer to serving plates; draw a line down each plate with sriracha sauce.'
      ],
      'https://images.media-allrecipes.com/userphotos/720x405/4521371.jpg',
      [
        new Ingridient('egg', 4),
        new Ingridient('tablespoon half-and-half', 1),
        new Ingridient('teaspoon salt, or to taste', 1/2),
        new Ingridient('teaspoon ground black pepper, or to taste', 1/2),
        new Ingridient('tablespoon chopped fresh chives', 1),
        new Ingridient('tablespoon butter', 1),
        new Ingridient('dashes sriracha sauce (optional)', 2)
      ]
    ),
    new Recipe(
      'Maple Apple Turkey Sausage',
      [
        'Combine turkey, apple, maple syrup, salt, sage, garlic powder, black pepper, marjoram, cinnamon, and cloves in a bowl; mix well. Form into 10 small patties.',
        'Heat olive oil in a skillet over medium heat. Fry patties until no longer pink in the center and the juices run clear, 3 to 4 minutes per side. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).'
      ],
      'https://images.media-allrecipes.com/userphotos/720x405/4553597.jpg',
      [
        new Ingridient('pound lean ground turkey', 1),
        new Ingridient('small apple - peeled, cored, and finely chopped', 1),
        new Ingridient('tablespoon pure maple syrup, or more to taste', 1),
        new Ingridient('teaspoon salt', 3/4),
        new Ingridient('teaspoon dried sage', 1/2),
        new Ingridient('teaspoon garlic powde', 1/4),
        new Ingridient('teaspoon ground black pepper', 1/4),
        new Ingridient('teaspoon dried marjoram', 1/4),
        new Ingridient('teaspoon ground cinnamon', 1/8),
        new Ingridient('dash ground cloves', 1),
        new Ingridient('tablespoon olive oil', 1)
      ]
    ),
    new Recipe(
      'Barbie\'s Tuna Salad',
      [
        'In a medium bowl, stir together the tuna, mayonnaise, Parmesan cheese, and onion flakes. Season with curry powder, parsley, dill and garlic powder. Mix well and serve with crackers or on a sandwich.'
      ],
      'https://images.media-allrecipes.com/userphotos/720x405/4539967.jpg',
      [
        new Ingridient('can white tuna, drained and flaked', 1),
        new Ingridient('tablespoons mayonnaise or salad dressing', 6),
        new Ingridient('tablespoon Parmesan cheese', 1),
        new Ingridient('tablespoon sweet pickle relish', 3),
        new Ingridient('teaspoon dried minced onion flakes', 1/8),
        new Ingridient('teaspoon curry powder', 1/4),
        new Ingridient('tablespoon dried parsley', 1),
        new Ingridient('teaspoon dried dill weed', 1),
        new Ingridient('pinch garlic powder', 1)
      ]
    )

  ];

  ngOnInit(): void {
    this.selectedRecipe.emit(this.recipes[0]);
  }

  getRecipes() : Recipe[] {
    return this.recipes.slice();
  }

  addRecipe(recipe : Recipe) {
    if (recipe) {
      this.recipes.push(recipe);
    }
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
