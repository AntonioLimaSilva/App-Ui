import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from './restaurant/restaurant.model';
import { MET_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';

import { MenuItem } from '../restaurant-datail/menu-item/menu-item.model';
import { Review } from '../restaurant-datail/reviews/review.model';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  buscarTodos(): Observable<Restaurant[]> {
    return this.http.get(`${MET_API}/restaurants`)
      .map(response => response.json())
      .catch(erro => ErrorHandler.handle(erro));
  }

  buscarAvaliacoes(id: string): Observable<Review> {
    return this.http.get(`${MET_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(erro => ErrorHandler.handle(erro));
  }

  buscarItensDoMenu(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MET_API}/restaurants/${id}/menu`)
    .map(response => response.json())
    .catch(erro => ErrorHandler.handle(erro));
  }

}
