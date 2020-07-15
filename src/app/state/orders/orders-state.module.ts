import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { OrdersEffects } from "./orders.effects";
import * as fromOrders from "./orders.reducer";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromOrders.ordersFeatureKey,
      fromOrders.ordersReducer
    ),
    EffectsModule.forFeature([OrdersEffects]),
  ],
  declarations: [],
})
export class OrdersStateModule {}
