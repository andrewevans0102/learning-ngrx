import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LoginEffects } from "./login.effects";
import * as fromOrders from "./login.reducer";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromOrders.loginFeatureKey, fromOrders.loginReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  declarations: [],
})
export class LoginStateModule {}
