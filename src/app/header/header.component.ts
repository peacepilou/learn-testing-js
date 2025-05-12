import { Component, inject } from '@angular/core';
import { CartService } from '../product/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public cart = inject(CartService);
}
