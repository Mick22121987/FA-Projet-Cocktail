import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/models/cocktail.model';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css'],
  providers: [CocktailService]
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[] = [
    new Cocktail('Mojito', 'https://static.cuisineaz.com/400x320/i14978-recette-de-mojito.jpeg', 'Description Mojito'),
    new Cocktail('Margarita', 'https://chefcuisto.com/files/2013/10/margarita-624x909.jpg', 'Description Margarita'),
    new Cocktail('Martini', 'https://img.estadao.com.br/thumbs/640/resources/jpg/0/9/1453290948390.jpg', 'Description martini')
  ];

  public cocktail: Cocktail;

  constructor() { }

  ngOnInit() {
    this.cocktail = this.cocktails[0];
  }

  public pickCocktail(index: number): void {
    this.cocktail = this.cocktails[index];
  }

}
