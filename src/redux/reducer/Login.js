import { LoginAction } from "../action/Login";
import { getStateOfRemoteData } from "./includes";

const LoginState = getStateOfRemoteData(
  "LoginSuccess",
  "LoginFailure",
  "LoginFetching",
  "LoginData",
  "LoginError"
);

export const LoginReducer = (
  state = {
    ...LoginState.initial(),
  },
  action = {}
) => {
  switch (action.type) {
    case LoginAction.types.progress:
      state.LoginData = [];
      return LoginState.isFetching(state);

    case LoginAction.types.success:
      return LoginState.success(state, action);

    case LoginAction.types.failure:
      return LoginState.failure(state, action);

    default:
      return state;
  }
};
