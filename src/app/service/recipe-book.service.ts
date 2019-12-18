import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {
  recipes: any = [
    {
      title: 'Recipe 1',
      image: 'http://lorempixel.com/output/food-q-c-640-480-8.jpg',
      id: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur consequuntur ' +
      'delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium similique, ullam vero.' +
      ' Illo.'
    },
    {
      title: 'Recipe 2',
      image: 'http://lorempixel.com/output/food-q-c-640-480-6.jpg',
      id: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur consequuntur' +
      ' delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium similique,' +
      ' ullam vero. Illo.'
    },
    {
      title: 'Recipe 3',
      image: 'http://lorempixel.com/output/food-q-c-640-480-9.jpg',
      id: 3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 4',
      image: 'http://lorempixel.com/output/food-q-c-640-480-4.jpg',
      id: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 5',
      image: 'http://lorempixel.com/output/food-q-c-640-480-10.jpg',
      id: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 6',
      image: 'http://lorempixel.com/output/food-q-c-640-480-7.jpg',
      id: 6,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 7',
      image: 'http://lorempixel.com/output/food-q-c-640-480-2.jpg',
      id: 7,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 8',
      image: 'http://lorempixel.com/output/abstract-q-c-640-480-10.jpg',
      id: 8,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 9',
      image: 'http://lorempixel.com/output/abstract-q-c-640-480-1.jpg',
      id: 9,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    }
  ];

  constructor(private http: HttpClient) { }

  public getRecipeList(): Observable<any> {
    return of(this.recipes).pipe(
      delay(700)
    );
  }
}
