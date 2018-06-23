import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ShoppingCartService } from '../restaurant-datail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-datail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { MEAT_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class OrderService {

  constructor(
    private cartService: ShoppingCartService,
    private http: Http
  ) { }

  cartItens(): CartItem[] {
    return this.cartService.itens;
  }

  increaseQty(item: CartItem): void {
    this.cartService.increaseQty(item);
  }

  dereaseQty(item): void {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({headers}))
      .map(response => response.json())
      .map(order => order.id)
      .catch(erro => ErrorHandler.handle(erro));
  }

  clear() {
    this.cartService.clear();
  }

}
