import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

import { RecipeBookService } from '../service/recipe-book.service';
import { Recipe } from '../interface/recipe.interface';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  length = 10;
  pageSize = 2;
  pageSizeOptions: number[] = [1, 2, 4, 5];
  pageEvent: PageEvent;

  constructor(private recipeBookService: RecipeBookService, private router: Router) { }

  ngOnInit() {
    this.getRecipeList();
  }

  getRecipeList() {
    this.recipes$ = this.recipeBookService.getRecipeList();
    console.log(this.recipes$);
  }

  openRecipe(id) {
    this.router.navigate([`/recipe-list/${id}`]);
    console.log(id);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
