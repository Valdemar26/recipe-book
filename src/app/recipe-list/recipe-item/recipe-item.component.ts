import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../interface/recipe.interface';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('open');
  }

  openRecipe(id) {
    this.router.navigate([`/recipe-list/${id}`]);
    console.log(id);
  }

  back() {
    this.router.navigate(['']);
  }

}
