import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  @Input() public cocktails: Cocktail[];
  @Output() public pick: EventEmitter<number> = new EventEmitter<number>();
  public activeCocktail = 0;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
  }

  pickCocktail(index: number): void {
    this.activeCocktail = index;
    this.pick.emit(index);
  }
}
