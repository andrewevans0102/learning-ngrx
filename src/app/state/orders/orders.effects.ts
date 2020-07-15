import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  loadOrders,
  ordersSuccess,
  createOrder,
  ordersError,
  deleteOrder,
  deleteSuccess,
} from "./orders.actions";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { Order } from "../../models/order";
import { OrdersService } from "src/app/services/orders/orders.service";

@Injectable()
export class OrdersEffects {
  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrders),
      switchMap((action) =>
        this.orderService.retrieveOrders().pipe(
          map((orders: Order[]) => ordersSuccess({ orders: orders })),
          catchError((error) => of(ordersError(error)))
        )
      )
    )
  );

  createOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createOrder),
      switchMap((action) =>
        this.orderService.createOrder(action.name, action.description).pipe(
          map((orders: Order[]) => loadOrders()),
          catchError((error) => of(ordersError(error)))
        )
      ),
      catchError((error) => of(ordersError({ message: error })))
    )
  );

  deleteOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteOrder),
      switchMap((action) =>
        this.orderService.deleteOrder(action.id).pipe(
          map(() => loadOrders()),
          catchError((error) => of(ordersError(error)))
        )
      ),
      catchError((error) => of(ordersError({ message: error })))
    )
  );

  constructor(private actions$: Actions, private orderService: OrdersService) {}
}
