import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantsService } from './restaurants/restaurants.service';
import { MenuComponent } from './restaurant-datail/menu/menu.component';
import { MenuItemComponent } from './restaurant-datail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-datail/shopping-cart/shopping-cart.component';
import { RestaurantDatailComponent } from './restaurant-datail/restaurant-datail.component';
import { ReviewsComponent } from './restaurant-datail/reviews/reviews.component';
import { ShoppingCartService } from './restaurant-datail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { InputContainerComponent } from './shared/input-container/input-container.component';
import { RadioComponent } from './radio/radio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    RestaurantDatailComponent,
    ReviewsComponent,
    OrderComponent,
    InputContainerComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService, ShoppingCartService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
