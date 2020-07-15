import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  createOrder(name: string, description: string) {
    return this.http.post(environment.create, {
      name: name,
      description: description,
    });
  }

  deleteOrder(id: string) {
    return this.http.delete(`${environment.delete}/${id}`);
  }

  retrieveOrders() {
    return this.http.get(environment.orders);
  }
}
