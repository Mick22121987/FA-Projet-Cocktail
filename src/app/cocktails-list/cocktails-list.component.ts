import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[] = [
    new Cocktail('Mojito', 'https://static.cuisineaz.com/400x320/i14978-recette-de-mojito.jpeg', 'Description Mojito'),
    new Cocktail('Margarita', 'https://chefcuisto.com/files/2013/10/margarita-624x909.jpg', 'Description Margarita'),
    new Cocktail('Martini', 'https://img.estadao.com.br/thumbs/640/resources/jpg/0/9/1453290948390.jpg', 'Description martini')
  ];

  constructor() { }

  ngOnInit() {
  }

}
