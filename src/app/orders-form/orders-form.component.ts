import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Order } from "../models/order";
import { Store } from "@ngrx/store";
import { OrdersActions } from "../state/orders";

@Component({
  selector: "app-orders-form",
  templateUrl: "./orders-form.component.html",
  styleUrls: ["./orders-form.component.scss"],
})
export class OrdersFormComponent implements OnInit {
  name: string;
  description: string;

  constructor(private router: Router, private store: Store<{}>) {}

  ngOnInit(): void {}

  createOrder() {
    this.store.dispatch(
      OrdersActions.createOrder({
        name: this.name,
        description: this.description,
      })
    );
    this.router.navigate(["/view-orders"]);
  }

  goHome() {
    this.router.navigate(["/home"]);
  }
}
