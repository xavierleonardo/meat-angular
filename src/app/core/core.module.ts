import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { NgModule } from "@angular/core";
import { RestaurantsService } from '../restaurants/restaurants.service';

@NgModule({
  providers: [ShoppingCartService, RestaurantsService, OrderService]
})
export class CoreModule {}
