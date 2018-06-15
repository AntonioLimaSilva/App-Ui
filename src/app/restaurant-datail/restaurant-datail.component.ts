import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantService } from '../restaurants/restaurant.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-datail',
  templateUrl: './restaurant-datail.component.html'
})
export class RestaurantDatailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurantService.buscarPorId(this.activatedRoute.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
