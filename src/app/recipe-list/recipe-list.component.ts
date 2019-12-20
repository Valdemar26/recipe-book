import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { RecipeBookService } from '../service/recipe-book.service';
import { RecipeInterface } from '../interface/recipe.interface';
import { RecipePerPageInterface } from '../interface/recipe-per-page.interface';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipesPage$: Observable<RecipeInterface[]>;
  paginationList$: Observable<number[]>;
  selectedPage = 0;
  animationState = false;

  recipesPerPage: RecipePerPageInterface[] = [
    { value: '2' },
    { value: '4' },
    { value: '8' }
  ];

  constructor(private recipeBookService: RecipeBookService, private router: Router) { }

  ngOnInit() {
    this.getRecipeList();
    this.animationState = true;
  }

  getRecipesPerPage(event) {
    this.recipeBookService.setPage(event.value);
  }

  getRecipeList() {
    this.recipeBookService.setPage();
    this.recipesPage$ = this.recipeBookService.page$;
    this.paginationList$ = this.recipeBookService.paginationList$;
  }

  openRecipe(id) {
    this.router.navigate([`/recipe-list/${id}`]);
  }

  getPage(page: number, index) {
    this.recipeBookService.getPage(page);
    this.selectedPage = index;
  }
}
