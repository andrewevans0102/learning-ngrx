import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { OrdersService } from "../services/orders/orders.service";
import { LoginService } from "../services/login/login.service";

@Component({
  selector: "app-view-orders",
  templateUrl: "./view-orders.component.html",
  styleUrls: ["./view-orders.component.scss"],
})
export class ViewOrdersComponent implements OnInit {
  orders$: Observable<any>;
  error$: Observable<any>;
  orders: any;

  constructor(
    private router: Router,
    private orderService: OrdersService,
    private loginService: LoginService
  ) {
    this.orderService.retrieveOrders().subscribe((response) => {
      if (response instanceof Error) {
        alert(response);
      } else {
        this.orders = response;
      }
    });
  }

  ngOnInit(): void {}

  goToOrdersForm() {
    this.router.navigate(["/orders-form"]);
  }

  deleteOrder(id: string) {
    this.orderService.deleteOrder(id).subscribe((response) => {
      if (response instanceof Error) {
        alert(response);
      } else {
        this.orderService.retrieveOrders().subscribe((response) => {
          if (response instanceof Error) {
            alert(response);
          } else {
            this.orders = response;
          }
        });
      }
    });
  }

  goHome() {
    this.router.navigate(["/home"]);
  }

  logout() {
    this.loginService.logout().subscribe((response) => {
      if (response instanceof Error) {
        alert(response);
      } else {
        this.router.navigate(["/home"]);
      }
    });
  }
}
