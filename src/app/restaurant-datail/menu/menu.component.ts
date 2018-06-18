import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item.model';

import { RestaurantsService } from '../../restaurants/restaurants.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  itens: Observable<MenuItem[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.itens = this.restaurantsService.buscarItensDoMenu(this.activatedRoute.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem): void {
    console.log(item);
  }
}
