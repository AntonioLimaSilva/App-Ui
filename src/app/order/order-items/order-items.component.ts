import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-datail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() itens: CartItem[];

  @Output() increaseQty = new EventEmitter<CartItem>();

  @Output() decreaseQty = new EventEmitter<CartItem>();

  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() { }

  setIncreaseQty(item: CartItem): void {
    this.increaseQty.emit(item);
  }

  setDecreaseQty(item: CartItem): void {
    this.decreaseQty.emit(item);
  }

  setRemove(item: CartItem): void {
    this.remove.emit(item);
  }

}
