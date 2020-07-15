import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { LoginActions } from "../state/login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, private store: Store<{}>) {}

  ngOnInit(): void {}

  login() {
    this.store.dispatch(
      LoginActions.loadLogin({ name: "hello", password: "1234" })
    );
    this.router.navigate(["/view-orders"]);
  }
}
