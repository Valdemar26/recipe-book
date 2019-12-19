import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../../interface/recipe.interface';
import { first, switchMap } from 'rxjs/operators';
import { RecipeBookService } from '../../service/recipe-book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit, OnDestroy {
  recipeItem: Recipe;
  subscription: Subscription = new Subscription();

  constructor(private router: Router, private route: ActivatedRoute, private recipeBook: RecipeBookService) { }

  ngOnInit() {

    const recipeItem$ = this.route.paramMap.pipe(
      first(),
      switchMap((param) => {
        return this.recipeBook.getRecipeById(+param.get('id'));
      })
    ).subscribe(recipe => this.recipeItem = recipe[0]);

    this.subscription.add(recipeItem$);

    console.log('open', this.recipeItem);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  back() {
    this.router.navigate(['']);
  }

}
