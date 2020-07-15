import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(name: string, password: string) {
    return this.http.post(environment.login, {
      name: name,
      password: password,
    });
  }

  logout() {
    return this.http.post(environment.logout, {});
  }
}
