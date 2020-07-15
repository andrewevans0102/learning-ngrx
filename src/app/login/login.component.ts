import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../services/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    this.loginService.login(this.email, this.password).subscribe((response) => {
      if (response instanceof Error) {
        alert(response);
        return;
      } else {
        this.router.navigate(["/view-orders"]);
      }
    });
  }
}
