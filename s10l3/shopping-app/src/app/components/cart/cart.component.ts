import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor(private productListComponent: ProductListComponent) { }

  ngOnInit(): void {
    this.cart = this.productListComponent.cart;
  }
}
