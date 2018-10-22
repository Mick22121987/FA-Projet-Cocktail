import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail = new Cocktail('Mojito', 'https://static.cuisineaz.com/400x320/i14978-recette-de-mojito.jpeg', 'Description Mojito');

  constructor() { }

  ngOnInit() {
  }

}
