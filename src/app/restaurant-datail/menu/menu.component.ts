import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(
    private restaurantsService: RestaurantsService,
    private activatedRoute:  ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantsService.buscarItensDoMenu(this.activatedRoute.parent.snapshot.params['id']);
  }

}
