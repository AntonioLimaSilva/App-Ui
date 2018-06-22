import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Review } from './review.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<Review>;

  constructor(
    private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reviews = this.restaurantsService.buscarAvaliacoes(this.activatedRoute.parent.snapshot.params['id']);
  }

}
