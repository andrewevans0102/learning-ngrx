import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { addItem, getItems, deleteItem } from "./ToDoActions";
import {
  loadLogin,
  loginSuccess,
  logoutSuccess,
  loginError,
  loadLogout,
} from "./login.actions";
import { map, switchMap, catchError, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { LoginService } from "src/app/services/login/login.service";
// import { ToDoService } from "./services/to-do.service";

@Injectable()
export class LoginEffects {
  loadLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLogin),
      switchMap((action) =>
        this.loginService.login(action.name, action.password).pipe(
          map(() => loginSuccess({ loggedIn: true })),
          catchError((error) => of(loginError(error)))
        )
      )
    )
  );

  loadLogout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLogout),
      switchMap((action) =>
        this.loginService.logout().pipe(
          map(() => logoutSuccess()),
          catchError((error) => of(loginError(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private loginService: LoginService) {}
}
