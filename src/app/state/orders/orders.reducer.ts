import { ordersSuccess, ordersError } from "./orders.actions";
import { on, createReducer, createSelector, Action } from "@ngrx/store";
import { Order } from "../../models/order";

export interface State {
  orders: Order[];
  error: string;
}

export const initialState: State = {
  orders: [],
  error: "",
};

export const ordersReducer = createReducer(
  initialState,
  on(ordersSuccess, (state, action) => ({
    ...state,
    orders: action.orders,
  })),
  on(ordersError, (state, action) => ({
    ...state,
    error: action.message,
  }))
);

export const ordersFeatureKey = "orders";

export function reducer(state: State | undefined, action: Action) {
  return ordersReducer(state, action);
}
