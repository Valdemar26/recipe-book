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
  recipesPage$: Observable<Recipe[]>;
  paginationList$: Observable<number[]>;

  constructor(private recipeBookService: RecipeBookService, private router: Router) { }

  ngOnInit() {
    this.getRecipeList();
  }

  getRecipeList() {
    this.recipeBookService.setPage();
    this.recipesPage$ = this.recipeBookService.page$;
    this.paginationList$ = this.recipeBookService.paginationList$;
  }

  openRecipe(id) {
    this.router.navigate([`/recipe-list/${id}`]);
    console.log(id);
  }

  getPage(page: number) {
    this.recipeBookService.getPage(page);
  }
}
