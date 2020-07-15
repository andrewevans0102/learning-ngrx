import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromOrders from "./orders.reducer";

const getOrdersState = createFeatureSelector<fromOrders.State>(
  fromOrders.ordersFeatureKey
);

export const selectOrders = createSelector(
  getOrdersState,
  (state) => state.orders
);

export const selectError = createSelector(
  getOrdersState,
  (state) => state.error
);
