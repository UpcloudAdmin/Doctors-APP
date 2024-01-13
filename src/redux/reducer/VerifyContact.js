import { verifyContactAction } from "../action/VerifyContact";
import { getStateOfRemoteData } from "./includes";

const verifyContactState = getStateOfRemoteData(
  "verifyContactSuccess",
  "verifyContactFailure",
  "verifyContactFetching",
  "verifyContactData",
  "verifyContactError"
);

export const verifyContactStateReducer = (
  state = {
    ...verifyContactState.initial(),
  },
  action = {}
) => {
  switch (action.type) {
    case verifyContactAction.types.progress:
      state.verifyContactData = [];
      return verifyContactState.isFetching(state);

    case verifyContactAction.types.success:
      return verifyContactState.success(state, action);

    case verifyContactAction.types.failure:
      return verifyContactState.failure(state, action);

    default:
      return state;
  }
};
