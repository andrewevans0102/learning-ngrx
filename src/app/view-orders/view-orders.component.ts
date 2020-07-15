import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { Order } from "../models/order";
// import { selectOrders, selectError } from "../state/orders/orders.reducer";
import { OrdersActions, selectOrders } from "../state/orders";
import { LoginActions } from "../state/login";

@Component({
  selector: "app-view-orders",
  templateUrl: "./view-orders.component.html",
  styleUrls: ["./view-orders.component.scss"],
})
export class ViewOrdersComponent implements OnInit {
  orders$: Observable<any>;
  error$: Observable<any>;

  constructor(private router: Router, private store: Store<{}>) {
    this.store.dispatch(OrdersActions.loadOrders());
    this.orders$ = this.store.pipe(select(selectOrders));
  }

  ngOnInit(): void {}

  goToOrdersForm() {
    this.router.navigate(["/orders-form"]);
  }

  deleteOrder(id: string) {
    this.store.dispatch(OrdersActions.deleteOrder({ id: id }));
  }

  goHome() {
    this.router.navigate(["/home"]);
  }

  logout() {
    this.store.dispatch(LoginActions.loadLogout());
    this.router.navigate(["/home"]);
  }
}
