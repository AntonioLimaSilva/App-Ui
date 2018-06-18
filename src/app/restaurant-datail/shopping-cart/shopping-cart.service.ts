import { Injectable } from '@angular/core';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

  itens: CartItem[] = [];

  constructor() { }

  clear(): void {
    this.itens = [];
  }

  addItem(item: MenuItem): void {
    let itemExistente = this.itens.find((mItem) => mItem.menuItem.id === item.id);

    if(itemExistente) {
      itemExistente.quantity = itemExistente.quantity + 1;
    }else{
      this.itens.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem): void {
    this.itens.splice(this.itens.indexOf(item), 1);
  }

  total(): number {
    return this.itens
      .map(item => item.value())
      .reduce((segundo, primeiro) => segundo + primeiro, 0);
  }

}
