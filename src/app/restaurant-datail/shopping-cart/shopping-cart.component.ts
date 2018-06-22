import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  itens(): CartItem[] {
    return this.shoppingCartService.itens;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  addItem(item: MenuItem) {
    this.shoppingCartService.addItem(item);
  }

  removeItem(item: CartItem): void {
    this.shoppingCartService.removeItem(item);
  }

  clear(): void {
    this.shoppingCartService.clear();
  }

}
