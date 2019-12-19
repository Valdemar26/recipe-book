import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

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
    },
    {
      title: 'Recipe 10',
      image: 'http://lorempixel.com/output/food-q-c-640-480-8.jpg',
      id: 10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 11',
      image: 'http://lorempixel.com/output/food-q-c-640-480-8.jpg',
      id: 11,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur consequuntur ' +
        'delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium similique, ullam vero.' +
        ' Illo.'
    },
    {
      title: 'Recipe 12',
      image: 'http://lorempixel.com/output/food-q-c-640-480-6.jpg',
      id: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur consequuntur' +
        ' delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium similique,' +
        ' ullam vero. Illo.'
    },
    {
      title: 'Recipe 13',
      image: 'http://lorempixel.com/output/food-q-c-640-480-9.jpg',
      id: 13,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 14',
      image: 'http://lorempixel.com/output/food-q-c-640-480-4.jpg',
      id: 14,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 15',
      image: 'http://lorempixel.com/output/food-q-c-640-480-10.jpg',
      id: 15,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 16',
      image: 'http://lorempixel.com/output/food-q-c-640-480-7.jpg',
      id: 16,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 17',
      image: 'http://lorempixel.com/output/food-q-c-640-480-2.jpg',
      id: 17,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 18',
      image: 'http://lorempixel.com/output/abstract-q-c-640-480-10.jpg',
      id: 18,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 19',
      image: 'http://lorempixel.com/output/abstract-q-c-640-480-1.jpg',
      id: 19,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 20',
      image: 'http://lorempixel.com/output/food-q-c-640-480-8.jpg',
      id: 20,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 21',
      image: 'http://lorempixel.com/output/food-q-c-640-480-8.jpg',
      id: 21,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    }
  ];

  constructor() { }

  public getRecipeList(): Observable<any> {
    return of(this.recipes).pipe(
      delay(700)
    );
  }

  getRecipeById(id: number) {
    return of(this.recipes).pipe(
      map((res: any) => {
        return res.filter(item => item.id === id);
      })
    );
  }
}
