import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map, skipWhile } from 'rxjs/operators';
import { RecipeInterface } from '../interface/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {
  recipes: RecipeInterface[] = [
    {
      title: 'Recipe 1',
      image: 'http://lorempixel.com/output/food-q-c-640-480-8.jpg',
      id: 1,
      longDescription: 'Recipe 1 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur consequuntur ' +
      'delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium similique, ullam vero.' +
      ' Illo.'
    },
    {
      title: 'Recipe 2',
      image: 'http://lorempixel.com/output/food-q-c-640-480-6.jpg',
      id: 2,
      longDescription: 'Recipe 2 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur consequuntur' +
      ' delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium similique,' +
      ' ullam vero. Illo.'
    },
    {
      title: 'Recipe 3',
      image: 'http://lorempixel.com/output/food-q-c-640-480-9.jpg',
      id: 3,
      longDescription: 'Recipe 3 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 4',
      image: 'http://lorempixel.com/output/food-q-c-640-480-4.jpg',
      id: 4,
      longDescription: 'Recipe 4 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 5',
      image: 'http://lorempixel.com/output/food-q-c-640-480-10.jpg',
      id: 5,
      longDescription: 'Recipe 5 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 6',
      image: 'http://lorempixel.com/output/food-q-c-640-480-7.jpg',
      id: 6,
      longDescription: 'Recipe 6 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 7',
      image: 'http://lorempixel.com/output/food-q-c-640-480-2.jpg',
      id: 7,
      longDescription: 'Recipe 7 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 8',
      image: 'http://lorempixel.com/output/abstract-q-c-640-480-10.jpg',
      id: 8,
      longDescription: 'Recipe 8 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 9',
      image: 'http://lorempixel.com/output/abstract-q-c-640-480-1.jpg',
      id: 9,
      longDescription: 'Recipe 9 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
      ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
      ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 10',
      image: 'http://lorempixel.com/output/food-q-c-640-480-8.jpg',
      id: 10,
      longDescription: 'Recipe 10 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 11',
      image: 'http://lorempixel.com/output/food-q-c-640-480-8.jpg',
      id: 11,
      longDescription: 'Recipe 11 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur consequuntur ' +
        'delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium similique, ullam vero.' +
        ' Illo.'
    },
    {
      title: 'Recipe 12',
      image: 'http://lorempixel.com/output/food-q-c-640-480-6.jpg',
      id: 12,
      longDescription: 'Recipe 12 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur consequuntur' +
        ' delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium similique,' +
        ' ullam vero. Illo.'
    },
    {
      title: 'Recipe 13',
      image: 'http://lorempixel.com/output/food-q-c-640-480-9.jpg',
      id: 13,
      longDescription: 'Recipe 13 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 14',
      image: 'http://lorempixel.com/output/food-q-c-640-480-4.jpg',
      id: 14,
      longDescription: 'Recipe 14 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 15',
      image: 'http://lorempixel.com/output/food-q-c-640-480-10.jpg',
      id: 15,
      longDescription: 'Recipe 15 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 16',
      image: 'http://lorempixel.com/output/food-q-c-640-480-7.jpg',
      id: 16,
      longDescription: 'Recipe 16 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 17',
      image: 'http://lorempixel.com/output/food-q-c-640-480-2.jpg',
      id: 17,
      longDescription: 'Recipe 17 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 18',
      image: 'http://lorempixel.com/output/abstract-q-c-640-480-10.jpg',
      id: 18,
      longDescription: 'Recipe 18 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 19',
      image: 'http://lorempixel.com/output/abstract-q-c-640-480-1.jpg',
      id: 19,
      longDescription: 'Recipe 19 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 20',
      image: 'http://lorempixel.com/output/food-q-c-640-480-8.jpg',
      id: 20,
      longDescription: 'Recipe 20 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    },
    {
      title: 'Recipe 21',
      image: 'http://lorempixel.com/output/food-q-c-640-480-8.jpg',
      id: 21,
      longDescription: 'Recipe 21 lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum minima nemo similique! Accusantium' +
        ' deserunt, distinctio explicabo illo ipsa laborum libero maxime molestiae, nihil odio, officiis optio sapiente voluptatem?' +
        ' Autem ipsum magni perspiciatis quod repellat repudiandae sint. Aliquid atque doloremque, fuga illo illum molestiae nemo odit' +
        ' officiis quam, quas quasi sed veritatis voluptatibus. Aliquid, aspernatur dicta dolorum error incidunt inventore ipsum iste' +
        ' magnam maiores necessitatibus optio repellat sed sit vero voluptatem! Accusamus dolor earum unde?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur' +
        ' consequuntur delectus, eligendi error expedita illum iste iusto maxime necessitatibus, officiis praesentium' +
        ' similique, ullam vero. Illo.'
    }
  ];

  paginationList$: Observable<number[]>;
  page$: Observable<any[]>;

  pageList: [][];

  private paginationList: BehaviorSubject<number[]> = new BehaviorSubject<number[]>(null);
  private page: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);

  constructor() {
    this.page$ = this.page.asObservable().pipe(
      delay(700),
      skipWhile((page) => !page)
    );
    this.paginationList$ = this.paginationList.asObservable().pipe(skipWhile((list) => !list));
  }

  setPage(size: number = 4): void {
    const recipes = JSON.parse(JSON.stringify(this.recipes));
    this.pageList = new Array(Math.ceil(this.recipes.length / size)).fill(null).map(() => {
      return recipes.splice(0, size);
    });
    this.paginationList.next(this.pageList.map((_, index) => index));

    this.getPage();
  }

  getPage(pageIndex: number = 0): void {
    this.page.next(this.pageList[pageIndex]);
  }

  getRecipeById(id: number) {
    return of(this.recipes).pipe(
      map((res: any) => res.filter(item => item.id === id))
    );
  }
}
