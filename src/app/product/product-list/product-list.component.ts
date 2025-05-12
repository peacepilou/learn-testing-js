import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = [{ id: 1, name: 'Potion' }, { id: 2, name: 'Super Potion' }];

  constructor(private cart: CartService) { }

  addToCart() {
    this.cart.addToCart();
  }
}
