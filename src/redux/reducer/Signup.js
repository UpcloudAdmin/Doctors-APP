import { SignUpAction } from "../action/Signup";
import { getStateOfRemoteData } from "./includes";

const SignUpState = getStateOfRemoteData(
  "SignUpSuccess",
  "SignUpFailure",
  "SignUpFetching",
  "SignUpData",
  "SignUpError"
);

export const SignUpReducer = (
  state = {
    ...SignUpState.initial(),
  },
  action = {}
) => {
  switch (action.type) {
    case SignUpAction.types.progress:
      state.SignUpData = [];
      return SignUpState.isFetching(state);

    case SignUpAction.types.success:
      return SignUpState.success(state, action);

    case SignUpAction.types.failure:
      return SignUpState.failure(state, action);

    default:
      return state;
  }
};
