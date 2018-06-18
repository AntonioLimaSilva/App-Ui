import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { MenuItem } from '../menu-item/menu-item.model';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Review } from './review.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  avaliacoes: Review[];

  constructor(
    private restaurantsService: RestaurantsService,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurantsService
      .buscarAvalicaoesDoMenu(this.ActivatedRoute.parent.snapshot.params['id'])
      .subscribe(avaliacoes => this.avaliacoes = avaliacoes);
  }

}
