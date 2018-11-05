import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';
@Injectable()
export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    new Cocktail('Mojito', 'https://static.cuisineaz.com/400x320/i14978-recette-de-mojito.jpeg', 'Description Mojito'),
    new Cocktail('Margarita', 'https://chefcuisto.com/files/2013/10/margarita-624x909.jpg', 'Description Margarita'),
    new Cocktail('Martini', 'https://img.estadao.com.br/thumbs/640/resources/jpg/0/9/1453290948390.jpg', 'Description martini')
  ]);

  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

  constructor() { }

  selectCocktail(index: number): void {
    this.cocktail.next(this.cocktails.value[index]);
  }
}
