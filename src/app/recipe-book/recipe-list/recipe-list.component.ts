import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

   recipes: Recipe[] = [
     new Recipe('Test Recipe 1', 'This is a test description 1', 'https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg'),
     new Recipe('Test Recipe 2', 'This is a test description 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrnfL-aZYmCr0APAF4mmnW5qa90bzt4ZYb6c-vSetaXJxUZ3z'),
     new Recipe('Test Recipe 3', 'This is a test description 3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89bBewZrHco39iq9isJGMT-SqMdakr5lTGG3qfMJYNsenvJkc-w'),
     new Recipe('Test Recipe 4', 'This is a test description 4', 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg')
   ];

  constructor() { }

  ngOnInit() {
  }

}
