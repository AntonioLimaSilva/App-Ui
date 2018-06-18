import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { MenuItem } from '../menu-item/menu-item.model';



@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  addMenuItem(item: MenuItem) {
    this.add.emit(item);
  }

}
