import { Injectable } from '@angular/core';

import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

@Injectable()
export class ShoppingCartService {

  itens: CartItem[] = [];

  clear(): void {
    this.itens = [];
  }

  addItem(item: MenuItem): void {
    let itemExistente = this.itens.find((mItem) => mItem.menuItem.id === item.id);

    if(itemExistente) {
      this.increaseQty(itemExistente);
    } else {
      this.itens.push(new CartItem(item));
    }
  }

  increaseQty(item): void {
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item): void {
    item.quantity = item.quantity - 1;
    if(item.quantity === 0) {
      this.removeItem(item);
    }
  }

  removeItem(item: any): void {
    this.itens.splice(this.itens.indexOf(item), 1);
  }

  total(): number {
    return this.itens
      .map(item => item.value())
      .reduce((segundo, primeiro) => segundo + primeiro, 0);
  }

}
