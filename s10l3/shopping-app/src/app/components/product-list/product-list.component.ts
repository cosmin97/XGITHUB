import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'; // Correggi il percorso

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  favorites: any[] = [];
  cart: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data.products;
    });
  }

  addToFavorites(product: any): void {
    if (!this.favorites.includes(product)) {
      this.favorites.push(product);
    }
  }

  addToCart(product: any): void {
    if (!this.cart.includes(product)) {
      this.cart.push(product);
    }
  }
}
