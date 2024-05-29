import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private productListComponent: ProductListComponent) { }

  ngOnInit(): void {
    this.favorites = this.productListComponent.favorites;
  }
}
