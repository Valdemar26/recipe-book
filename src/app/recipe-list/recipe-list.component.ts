import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { RecipeBookService } from '../service/recipe-book.service';
import { Recipe } from '../interface/recipe.interface';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  constructor(private recipeBookService: RecipeBookService) { }

  ngOnInit() {
    this.getRecipeList();
  }

  getRecipeList() {
    this.recipes$ = this.recipeBookService.getRecipeList();
  }



}
