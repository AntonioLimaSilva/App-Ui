import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from '../restaurant-datail/menu-item/menu-item.model';
import { MEAT_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';
import { Review } from '../restaurant-datail/reviews/review.model';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  listarTodos(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(erro => ErrorHandler.handle(erro));
  }

  buscarPorId(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(erro => ErrorHandler.handle(erro));
  }

  buscarItensDoMenu(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(erro => ErrorHandler.handle(erro));
  }

  buscarAvalicaoesDoMenu(id: string): Observable<Review[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(erro => ErrorHandler.handle(erro));
  }

}
