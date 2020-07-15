import { createAction, props } from "@ngrx/store";
import { Order } from "../../models/order";

export const loadOrders = createAction("[Orders] load orders");

export const ordersSuccess = createAction(
  "[Orders] order success",
  props<{ orders: Order[] }>()
);

export const createOrder = createAction(
  "[Orders] create order",
  props<{ name: string; description: string }>()
);

export const deleteOrder = createAction(
  "[Orders] delete order",
  props<{ id: string }>()
);

export const deleteSuccess = createAction("[Orders] delete orders success");

// export const loadLogout = createAction("[Login Component] load logout");

export const ordersError = createAction(
  "[Orders] view orders error",
  props<{ message: string }>()
);
