import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrdersService } from "../services/orders/orders.service";

@Component({
  selector: "app-orders-form",
  templateUrl: "./orders-form.component.html",
  styleUrls: ["./orders-form.component.scss"],
})
export class OrdersFormComponent implements OnInit {
  name: string;
  description: string;

  constructor(private router: Router, private orderService: OrdersService) {}

  ngOnInit(): void {}

  createOrder() {
    this.orderService
      .createOrder(this.name, this.description)
      .subscribe((response) => {
        if (response instanceof Error) {
          alert(response);
        } else {
          this.router.navigate(["/view-orders"]);
        }
      });
  }

  goHome() {
    this.router.navigate(["/home"]);
  }
}
