import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../restaurants/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-restaurant-datail',
  templateUrl: './restaurant-datail.component.html'
})
export class RestaurantDatailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurantService.buscarPorId(this.activatedRoute.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
