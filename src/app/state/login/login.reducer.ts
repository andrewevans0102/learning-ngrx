import { loginSuccess, loginError } from "./login.actions";
import { on, createReducer, Action } from "@ngrx/store";

export interface State {
  loggedIn: boolean;
  error: string;
}

export const initialState: State = {
  loggedIn: false,
  error: "",
};

export const loginReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => ({
    ...state,
    loggedIn: action.loggedIn,
  })),
  on(loginError, (state, action) => ({
    ...state,
    error: action.message,
  }))
);

export const loginFeatureKey = "login";

export function reducer(state: State | undefined, action: Action) {
  return loginReducer(state, action);
}
